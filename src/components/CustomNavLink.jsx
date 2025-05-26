import { NavLink } from "react-router-dom"

export const CustomNavLink = ({ route, text }) => {
    return (
        <NavLink to={route} className={({ isActive }) => `text-xl ${isActive ? 'text-primary' : ''}`}>
            {text}
        </NavLink>
    )
}
