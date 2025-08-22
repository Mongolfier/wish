import { createHttpRequest } from "../../../clients/createHttpRequest";
import { signInRoutes } from "../routes";

export interface SignInPayload {
  username: string;
  password: string;
}

// FIXME: add types for response
export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export const signIn = createHttpRequest<SignInPayload, SignInResponse>({
  url: signInRoutes.signIn(),
  method: "POST",
  bodyTransform: (payload: SignInPayload) => JSON.stringify(payload),
});
