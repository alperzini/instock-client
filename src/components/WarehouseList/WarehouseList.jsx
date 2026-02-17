import "./WarehouseList.scss";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";
import SortIcon from "../Icons/SortIcon";
import SearchField from "../SearchField/SearchField";
import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const WarehouseList = ({ warehouses, setWarehouses }) => {
const [search, setSearch] = useState("");
const navigate = useNavigate();

const handleDeleteWarehouse = (warehouseId) => {
    if (!setWarehouses) return;
    setWarehouses((prev) => prev.filter((w) => w.id !== warehouseId));
};

const filtered = warehouses.filter((w) =>
    `${w.warehouse_name} ${w.address} ${w.city} ${w.country} ${w.contact_name} ${w.contact_email} ${w.contact_phone}`
    .toLowerCase()
    .includes(search.toLowerCase())
);

return (
    <section className="warehouse-list">
    <div className="warehouse-list__container">
        <div className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>

        <div className="warehouse-list__actions">
            <SearchField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            />

            <Button variant="primary" onClick={() => navigate("/addWarehouse")}>
            + Add New Warehouse
            </Button>
        </div>
        </div>

        <div className="warehouse-list__table-header" role="row">
        <div className="warehouse-list__th" role="columnheader">
            WAREHOUSE <SortIcon />
        </div>
        <div className="warehouse-list__th" role="columnheader">
            ADDRESS <SortIcon />
        </div>
        <div className="warehouse-list__th" role="columnheader">
            CONTACT NAME <SortIcon />
        </div>
        <div className="warehouse-list__th" role="columnheader">
            CONTACT INFORMATION <SortIcon />
        </div>
        <div className="warehouse-list__th warehouse-list__th--actions" role="columnheader">
            ACTIONS
        </div>
        </div>

        <div className="warehouse-list__rows">
        {filtered?.map((warehouse) => (
            <WarehouseListItem 
            key={warehouse.id} 
            warehouse={warehouse} 
            onDelete={handleDeleteWarehouse}
            />
        ))}
        </div>
    </div>
    </section>
);
};

export default WarehouseList;

