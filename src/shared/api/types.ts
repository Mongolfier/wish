export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestConfig extends RequestInit {
    params?: Record<string, string>;
    data?: unknown;
}

export interface ApiResponse<T = unknown> {
    data: T;
    status: number;
    headers: Headers;
}

export interface ApiError extends Error {
    status?: number;
    data?: unknown;
}

export interface RequestInterceptor {
    onRequest?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
    onRequestError?: (error: unknown) => Promise<unknown>;
}

export interface ResponseInterceptor {
    onResponse?: <T>(response: ApiResponse<T>) => ApiResponse<T> | Promise<ApiResponse<T>>;
    onResponseError?: (error: ApiError) => Promise<never>;
}

export interface ApiClientConfig {
    baseURL: string;
    headers?: Record<string, string>;
    requestInterceptors?: RequestInterceptor[];
    responseInterceptors?: ResponseInterceptor[];
} 