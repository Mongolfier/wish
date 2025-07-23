export interface RequestConfig {
    input: RequestInfo | URL;
    init?: RequestInit | undefined;
}

export interface RequestInterceptor {
    onFulfilled?:
        | ((config: RequestConfig) => RequestConfig | Promise<RequestConfig>)
        | undefined;
    onRejected?: ((error: unknown) => unknown | Promise<unknown>) | undefined;
}

export interface ResponseInterceptor {
    onFulfilled?:
        | ((
              response: Response,
              config: RequestConfig
          ) => Response | Promise<Response>)
        | undefined;
    onRejected?:
        | ((
              error: unknown,
              config: RequestConfig
          ) => unknown | Promise<unknown>)
        | undefined;
}

export interface FetchClientConfig extends RequestInit {
    baseURL?: string;
}

export interface FetchService {
    useRequest: (
        onFulfilled?: (
            config: RequestConfig
        ) => RequestConfig | Promise<RequestConfig>,
        onRejected?: (error: unknown) => unknown | Promise<unknown>
    ) => void;
    useResponse: (
        onFulfilled?: (
            response: Response,
            config: RequestConfig
        ) => Response | Promise<Response>,
        onRejected?: (
            error: unknown,
            config: RequestConfig
        ) => unknown | Promise<unknown>
    ) => void;
    fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
}

export const fetchService = (config: FetchClientConfig): FetchService => {
    const { baseURL, ...configInit } = config;

    const requestInterceptors: RequestInterceptor[] = [];
    const responseInterceptors: ResponseInterceptor[] = [];

    const useRequest = (
        onFulfilled?: (
            config: RequestConfig
        ) => RequestConfig | Promise<RequestConfig>,
        onRejected?: (error: unknown) => unknown | Promise<unknown>
    ) => {
        requestInterceptors.push({ onFulfilled, onRejected });
    };

    const useResponse = (
        onFulfilled?: (
            response: Response,
            config: RequestConfig
        ) => Response | Promise<Response>,
        onRejected?: (
            error: unknown,
            config: RequestConfig
        ) => unknown | Promise<unknown>
    ) => {
        responseInterceptors.push({ onFulfilled, onRejected });
    };

    const fetch = async (
        input: RequestInfo | URL,
        init?: RequestInit
    ): Promise<Response> => {
        const requestInit = init
            ? {
                  ...configInit,
                  ...init,
                  headers: {
                      ...configInit?.headers,
                      ...init?.headers,
                  },
              }
            : configInit;

        const requestConfig = await runRequestInterceptors({
            input,
            init: requestInit,
        });

        let response: Response;
        try {
            const requestUrl =
                baseURL && !input.toString().startsWith('http')
                    ? `${baseURL}${input}`
                    : input;
            response = await globalThis.fetch(requestUrl, requestConfig.init);
        } catch (error) {
            return handleFetchError(error, requestConfig);
        }

        return runResponseInterceptors(response, requestConfig);
    };

    const runRequestInterceptors = async (
        config: RequestConfig
    ): Promise<RequestConfig> => {
        let currentConfig = config;

        for (const { onFulfilled, onRejected } of requestInterceptors) {
            currentConfig = await invokeRequestInterceptor(
                currentConfig,
                onFulfilled,
                onRejected
            );
        }

        return currentConfig;
    };

    const invokeRequestInterceptor = async (
        config: RequestConfig,
        onFulfilled?: (
            cfg: RequestConfig
        ) => RequestConfig | Promise<RequestConfig>,
        onRejected?: (error: unknown) => unknown | Promise<unknown>
    ): Promise<RequestConfig> => {
        try {
            if (!onFulfilled) {
                return config;
            }

            const modified = await onFulfilled(config);

            return modified ?? config;
        } catch (error) {
            if (onRejected) {
                const result = await onRejected(error);

                throw result ?? error;
            }

            throw error;
        }
    };

    const runResponseInterceptors = async (
        response: Response,
        config: RequestConfig
    ): Promise<Response> => {
        let chainResult = response;

        for (const { onFulfilled, onRejected } of responseInterceptors) {
            chainResult = await invokeResponseInterceptor(
                chainResult,
                config,
                onFulfilled,
                onRejected
            );
        }

        return chainResult;
    };

    const invokeResponseInterceptor = async (
        response: Response,
        config: RequestConfig,
        onFulfilled?: (
            res: Response,
            config: RequestConfig
        ) => Response | Promise<Response>,
        onRejected?: (
            error: unknown,
            config: RequestConfig
        ) => unknown | Promise<unknown>
    ): Promise<Response> => {
        try {
            if (!onFulfilled) {
                return response;
            }

            const modified = await onFulfilled(response, config);

            return modified ?? response;
        } catch (error) {
            if (onRejected) {
                const recovered = await onRejected(error, config);

                if (recovered instanceof Response) {
                    return recovered;
                }

                throw recovered ?? error;
            }

            throw error;
        }
    };

    const handleFetchError = async (
        error: unknown,
        config: RequestConfig
    ): Promise<Response> => {
        for (const { onRejected } of responseInterceptors) {
            if (onRejected) {
                const recovered = await onRejected(error, config);

                if (recovered instanceof Response) {
                    return recovered;
                }

                throw recovered ?? error;
            }
        }

        throw error;
    };

    return {
        useRequest,
        useResponse,
        fetch,
    };
};
