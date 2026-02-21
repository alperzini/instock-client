import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navigation.scss";

function Navigation() {
    const { pathname } = useLocation();
    const warehousePaths = ['/warehouse', '/editWarehouse', '/addWarehouse', '/editwarehouse', '/addwarehouse'];
    const inventoryPaths = ['/inventory', '/editInventory', '/addInventory', '/editinventory', '/addinventory'];
    const isWarehousePathAtive = () => warehousePaths.some(path => pathname.startsWith(path));
    const isInventoryPathAtive = () => inventoryPaths.some(path => pathname.startsWith(path));

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
                            `navigation__link ${isActive || isWarehousePathAtive() ? "navigation__link--active" : ""}`
                        }
                    >
                        Warehouses
                    </NavLink>

                    <NavLink
                        to="/inventory"
                        className={({ isActive }) =>
                            `navigation__link ${isActive || isInventoryPathAtive() ? "navigation__link--active" : ""}`
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
