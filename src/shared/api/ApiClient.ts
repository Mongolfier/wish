import type {
    ApiClientConfig,
    ApiError,
    ApiResponse,
    RequestConfig,
    RequestInterceptor,
    ResponseInterceptor
} from './types';
import { buildURL, isAbsoluteURL, mergeConfigs } from './utils';

export class ApiClient {
    private readonly baseURL: string;
    private readonly defaultConfig: RequestConfig;
    private readonly requestInterceptors: RequestInterceptor[];
    private readonly responseInterceptors: ResponseInterceptor[];

    constructor(config: ApiClientConfig) {
        this.baseURL = config.baseURL;
        this.defaultConfig = {
            headers: {
                'Content-Type': 'application/json',
                ...config.headers,
            },
        };
        this.requestInterceptors = config.requestInterceptors ?? [];
        this.responseInterceptors = config.responseInterceptors ?? [];
    }

    private async processRequestInterceptors(config: RequestConfig): Promise<RequestConfig> {
        let processedConfig = { ...config };

        for (const interceptor of this.requestInterceptors) {
            if (interceptor.onRequest) {
                try {
                    processedConfig = await interceptor.onRequest(processedConfig);
                } catch (error) {
                    if (interceptor.onRequestError) {
                        await interceptor.onRequestError(error);
                    }
                    throw error;
                }
            }
        }

        return processedConfig;
    }

    private async processResponseInterceptors<T>(response: ApiResponse<T>): Promise<ApiResponse<T>> {
        let processedResponse = { ...response };

        for (const interceptor of this.responseInterceptors) {
            if (interceptor.onResponse) {
                try {
                    processedResponse = await interceptor.onResponse(processedResponse);
                } catch (error) {
                    if (interceptor.onResponseError) {
                        await interceptor.onResponseError(error as ApiError);
                    }
                    throw error;
                }
            }
        }

        return processedResponse;
    }

    private async request<T>(endpoint: string, config: RequestConfig): Promise<ApiResponse<T>> {
        const isAbsolute = isAbsoluteURL(endpoint);
        const url = isAbsolute ? endpoint : buildURL(this.baseURL, endpoint, config.params);
        
        const finalConfig = mergeConfigs(this.defaultConfig, config);
        const processedConfig = await this.processRequestInterceptors(finalConfig);

        if (processedConfig.data && typeof processedConfig.data !== 'string') {
            processedConfig.body = JSON.stringify(processedConfig.data);
            delete processedConfig.data;
        }

        try {
            const response = await fetch(url, processedConfig);
            const data = await response.json() as T;

            const apiResponse: ApiResponse<T> = {
                data,
                status: response.status,
                headers: response.headers,
            };

            if (!response.ok) {
                const error: ApiError = new Error(response.statusText);
                error.status = response.status;
                error.data = data;
                throw error;
            }

            return this.processResponseInterceptors(apiResponse);
        } catch (error) {
            for (const interceptor of this.responseInterceptors) {
                if (interceptor.onResponseError) {
                    await interceptor.onResponseError(error as ApiError);
                }
            }
            throw error;
        }
    }

    public async get<T>(endpoint: string, config: Omit<RequestConfig, 'method'> = {}): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...config, method: 'GET' });
    }

    public async post<T>(endpoint: string, data?: unknown, config: Omit<RequestConfig, 'method' | 'data'> = {}): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...config, method: 'POST', data });
    }

    public async put<T>(endpoint: string, data?: unknown, config: Omit<RequestConfig, 'method' | 'data'> = {}): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...config, method: 'PUT', data });
    }

    public async patch<T>(endpoint: string, data?: unknown, config: Omit<RequestConfig, 'method' | 'data'> = {}): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...config, method: 'PATCH', data });
    }

    public async delete<T>(endpoint: string, config: Omit<RequestConfig, 'method'> = {}): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...config, method: 'DELETE' });
    }
} 