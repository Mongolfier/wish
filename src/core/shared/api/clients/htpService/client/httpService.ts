import { fetchService } from "@/core/shared/lib/fetchService/fetchService";
import { httpServiceParams } from "../consts/httpServiceParams";

const httpService = (() => {
  const service = fetchService({
    ...httpServiceParams,
    baseURL: "http://77.223.98.221/",
  });

  return service;
})();

export { httpService };
