import { Link, NavLink, useNavigate } from "react-router-dom";
import { CustomNavLink } from "./CustomNavLink";

export const Navbar = () => {

    const navigate = useNavigate();
    const onExit = () => {
        navigate('/', { replace: true });
    }

    const onLogoClick = () => {
        navigate('/zfighter');
    }

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/zfighter" className="text-xl">
                                    Guerreros Z
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/villain" className="text-xl">
                                    Villanos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/freezer" className="text-xl">
                                    Freezer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/other" className="text-xl">
                                    Otros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/search" className="text-xl">
                                    Búsqueda
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <img src="/images/dragon_ball_logo.png" alt="Dragon Ball Logo"
                        loading="lazy" className="ml-2 cursor-pointer w-38 transition duration-125 hover:scale-120"
                        onClick={onLogoClick} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <CustomNavLink route="/zfighter" text="Guerreros Z" />
                        </li>
                        <li>
                            <CustomNavLink route="/villain" text="Villanos" />
                        </li>
                        <li>
                            <CustomNavLink route="/freezer" text="Freezer" />
                        </li>
                        <li>
                            <CustomNavLink route="/other" text="Otros" />
                        </li>
                        <li>
                            <CustomNavLink route="/search" text="Búsqueda" />
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-secondary mr-2" onClick={onExit}>Salir</a>
                </div>
            </div>
        </>
    );
};
