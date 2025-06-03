const BASE_URL = 'http://194.87.74.158:8080/api/v1'; // Base API URL

export interface ApiRequest {
    endpoint: string;
    method: 'GET' | 'POST';
    data?: unknown;
    headers?: Record<string, unknown>
}
export async function apiRequest({ endpoint, method = 'GET', data = null, headers = {} }: ApiRequest) {
  const url = `${BASE_URL}${endpoint}`;
  const config: RequestInit = {
    method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      }
  };

  if (data && method !== 'GET') {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
