export class ApiError extends Error {
	override name = 'ApiError';

	response?: Response;

	responseJson?: Record<string, unknown>;

	constructor(response: Response, responseJson?: Record<string, unknown>) {
		super(`Fetched response is not ok!`);

		this.response = response;
		this.responseJson = responseJson ?? {};
	}
}
