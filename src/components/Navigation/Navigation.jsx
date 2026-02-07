import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navigation.scss";

function Navigation() {
return (
    <header className="navigation">
    <div className="navigation__container">
        <NavLink to="/" className="navigation__logo">
        <Logo />
        </NavLink>

        <nav className="navigation__nav">
        <NavLink
            to="/"
            end
            className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link--active" : ""}`
            }
        >
            Warehouses
        </NavLink>

        <NavLink
            to="/inventory"
            className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link--active" : ""}`
            }
        >
            Inventory
        </NavLink>
        </nav>
    </div>
    </header>
);
}

export default Navigation;
