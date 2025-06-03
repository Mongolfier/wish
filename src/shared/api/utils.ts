import type { RequestConfig } from './types';

export function buildURL(baseURL: string, endpoint: string, params?: Record<string, string>): string {
    const url = new URL(endpoint, baseURL);
    
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }
    
    return url.toString();
}

export function mergeConfigs(defaultConfig: RequestConfig, config: RequestConfig): RequestConfig {
    return {
        ...defaultConfig,
        ...config,
        headers: {
            ...defaultConfig.headers,
            ...config.headers,
        },
    };
}

export function isAbsoluteURL(url: string): boolean {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
} 