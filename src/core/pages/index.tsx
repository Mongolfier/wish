import { httpService } from "../shared/api/clients/htpService/client/httpService";
import { AuthTestPage } from "../features/AuthTest/AuthTest";

export const MainPage = async () => {
    const response = await httpService.fetch('test')
    console.log(response)

    return (
        <div>
            <h1>Welcome to Wish App</h1>
            <AuthTestPage />
        </div>
    );
};
