import "./WarehouseList.scss";
import WarehouseListItem from "./WarehouseListItem";

const WarehousesPage = ({ warehouses, setWarehouses }) => {    
    return (
        <section className="warehouse-list">
            {/* Page header */}
            <div className="warehouse-list__header">
            <h1 className="warehouse-list__title">Warehouses</h1>
    
            <div className="warehouse-list__actions">
                {/* Search (UI only) */}
                <input
                type="text"
                className="warehouse-list__search"
                placeholder="Search..."
                />
    
                {/* Add button */}
                <button className="warehouse-list__add">
                + Add New Warehouse
                </button>
            </div>
            </div>
        </section>
        );
    };
    
    export default WarehousesList;