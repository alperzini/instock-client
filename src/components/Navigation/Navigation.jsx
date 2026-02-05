import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navigation.scss'

function Navigation() {
const location = useLocation()
const isWarehousesActive = location.pathname === '/' || location.pathname.startsWith('/WarehousesPage')
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
