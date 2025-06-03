import { NavLink } from "react-router"
import { useAuth } from "../../shared/hooks/useAuth"

export const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' >Main</NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}