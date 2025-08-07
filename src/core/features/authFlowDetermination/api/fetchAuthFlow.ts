import { authRoutes } from '@/core/shared/api/routes/auth';
import { httpService } from '@/core/shared/api/routes/httpService/client/httpService';
import { AdapterConfig } from '@/core/shared/types/adapterConfig';

export const fetchAuthFlow = async (email: string, config?: AdapterConfig) => {
<<<<<<< HEAD
	return httpService.fetch(authRoutes.flowDetermination(email), {
		method: 'GET',
        signal: config?.signal ?? null,
=======
	return httpService.fetch(authRoutes.flowDetermination(), {
		method: 'POST',
		body: JSON.stringify({ email }),
		signal: config?.signal ?? null,
>>>>>>> 0afaa3fab9eb89eeb79d6cb25ee1ddf4136c85e6
	});
};