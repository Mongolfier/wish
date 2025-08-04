import { authRoutes } from '@/core/shared/api/routes/auth';
import { httpService } from '@/core/shared/api/routes/httpService/client/httpService';
import { AdapterConfig } from '@/core/shared/types/adapterConfig';

export const fetchAuthFlow = async (email: string, config?: AdapterConfig) => {
	return httpService.fetch(authRoutes.flowDetermination(email), {
		method: 'GET',
        signal: config?.signal ?? null,
	});
};