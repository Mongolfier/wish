import { NavLink } from "react-router"

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' >Main</NavLink>
                </li>
                <li>
                    <NavLink to='/auth' >Auth</NavLink>
                </li>
            </ul>
        </nav>
    )
}