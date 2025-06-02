import { useState, type FormEvent } from "react";
import { useAuth } from "../../shared/hooks/useAuth";
import { Navigate, useNavigate } from "react-router";

export const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login, user, isLoading } = useAuth();

    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would usually send a request to your backend to authenticate the user
        // For the sake of this example, we're using a mock authentication
        if (username === "user" && password === "password") {
            // Replace with actual authentication logic
            login(username);
            navigate("/", { replace: true });
        } else {
            alert("Invalid username or password");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}