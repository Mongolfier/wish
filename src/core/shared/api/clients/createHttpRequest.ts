import { merge } from 'es-toolkit';

import { ApiError } from '@/core/shared/api/clients/ApiError';
import { type FetchService } from '@/core/shared/lib/fetchService/fetchService';

export interface HttpRequestConfig<TPayload = unknown> {
	url: string | ((payload: TPayload) => string);
	method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	headers?: HeadersInit;
	bodyTransform?: (payload: TPayload) => unknown;
	responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'form';
}

export function createHttpRequest<TPayload = unknown, TResponse = unknown>(requestConfig: HttpRequestConfig<TPayload>) {
	return async (
		fetchFn: FetchService['fetch'],
		payload: TPayload,
		fetchConfig?: Record<keyof RequestInfo, unknown>,
	): Promise<TResponse> => {
		const { url: requestConfigUrl, bodyTransform, method, responseType, ...restRequestConfig } = requestConfig;

		const url = typeof requestConfigUrl === 'function' ? requestConfigUrl(payload) : requestConfigUrl;
		const preparedBody = (requestConfig.bodyTransform ? requestConfig.bodyTransform(payload) : payload) as BodyInit;

		const response = await fetchFn(url, {
			...merge(restRequestConfig, fetchConfig ?? {}),
			method: method,
			body: ['GET', 'HEAD'].includes(method) ? null : preparedBody,
		});

		if (!response.ok) {
			const isJsonContentType = response.headers.get('Content-Type')?.includes('application/json');
			const responseJson = isJsonContentType ? await response.json() : void 0;

			throw new ApiError(response, responseJson);
		}

		switch (responseType) {
			case 'text':
				return response.text() as unknown as TResponse;
			case 'blob':
				return response.blob() as unknown as TResponse;
			case 'arrayBuffer':
				return response.arrayBuffer() as unknown as TResponse;
			case 'form':
				return response.formData() as unknown as TResponse;
			default:
				return response.json() as TResponse;
		}
	};
}
