import { fetchService } from "@/core/shared/lib/fetchService/fetchService";
import { httpServiceParams } from "../consts";


const httpService = (() => {
	const service = fetchService(httpServiceParams);

	// TODO: add interceptors

	return service;
})();

export { httpService };
