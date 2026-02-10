import "./WarehouseList.scss";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";
import SortIcon from "../Icons/SortIcon";
import SearchField from "../SearchField/SearchField";
import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const WarehouseList = ({ warehouses, setWarehouses }) => {    
    const [search, setSearch] = useState("");
    return (
        <section className="warehouse-list">

            <div className="warehouse-list__container">
            {/* Page header */}
            <div className="warehouse-list__header">
            <h1 className="warehouse-list__title">Warehouses</h1>
    
            <div className="warehouse-list__actions">
                {/* Search (UI only) */}
                <SearchField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                />
    
                {/* Add button */}
                <Button 
                variant="primary"
                onClick={() => navigate("/addWarehouse")}
                >
                + Add New Warehouse</Button>

            </div>

            {/* Table header */}
            <div className="warehouse-list__table-header">
            <span className="warehouse-list__th">WAREHOUSE <SortIcon /></span>
            <span className="warehouse-list__th">ADDRESS <SortIcon /></span>
            <span className="warehouse-list__th">CONTACT NAME <SortIcon /></span>
            <span className="warehouse-list__th">CONTACT INFORMATION <SortIcon /></span>
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
        </div>
        </section>
        );
    };
    
    export default WarehouseList;