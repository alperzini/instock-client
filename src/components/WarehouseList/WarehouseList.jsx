import "./WarehouseList.scss";
import WarehouseListItem from "./WarehouseListItem";

const WarehouseList = ({ warehouses }) => {    
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
                <button type="button" className="warehouse-list__add">
                + Add New Warehouse
                </button>

            </div>

            {/* Table header */}
            <div className="warehouse-list__table-header">
            <span className="warehouse-list__th">WAREHOUSE</span>
            <span className="warehouse-list__th">ADDRESS</span>
            <span className="warehouse-list__th">CONTACT NAME</span>
            <span className="warehouse-list__th">CONTACT INFORMATION</span>
            <span className="warehouse-list__th warehouse-list__th--actions">ACTIONS</span>
            </div>
            
            {/* Warehouse rows */}
            <div className="warehouse-list__rows">
            {warehouses?.map((warehouse) => (
                <WarehouseListItem
                key={warehouse.id}
                warehouse={warehouse}
                />
            ))}
            </div>
        </div>
        </section>
        );
    };
    
    export default WarehouseList;