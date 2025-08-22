import { httpService } from "@/core/shared/api/clients/htpService/client/httpService";
import { signIn as signInRequest } from "@/core/shared/api/services/signIn/requests/signIn";

export async function signIn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const response = await signInRequest(httpService.fetch, {
      username,
      password,
    });

    return response;
  } catch (error) {}
}
