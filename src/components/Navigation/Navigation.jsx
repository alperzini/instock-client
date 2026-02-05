import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navigation.scss'

function Navigation() {

    // Gives us access to the current URL (pathname, search, hash, etc.)
const location = useLocation()

// Check if the current page is related to Warehouses
  // This will be true for:
  // - Home page "/"
  // - Any route that starts with "/WarehousesPage"
const isWarehousesActive = location.pathname === '/' || location.pathname.startsWith('/WarehousesPage')

// Check if the current page is related to Inventory
// This will be true for any route that starts with "/InventoryPage"
const isInventoryActive = location.pathname.startsWith('/InventoryPage')

return (
    <header className="navigation">
    <div className="navigation__container">
        <NavLink to="/" className="navigation__logo">
        <Logo />
        </NavLink>
        <nav className="navigation__nav">
        <NavLink
            to="/WarehousesPage"
            className={`navigation__link ${isWarehousesActive ? 'navigation__link--active' : ''}`}
        >
            Warehouses
        </NavLink>
        <NavLink
            to="/InventoryPage"
            className={`navigation__link ${isInventoryActive ? 'navigation__link--active' : ''}`}
        >
            Inventory
        </NavLink>
        </nav>
    </div>
    </header>
)
}

export default Navigation
