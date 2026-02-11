import "./WarehouseList.scss";
import WarehouseListItem from "../WarehouseListItem/WarehouseListItem";
import SortIcon from "../Icons/SortIcon";
import SearchField from "../SearchField/SearchField";
import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const WarehouseList = ({ warehouses }) => {
const [search, setSearch] = useState("");
const navigate = useNavigate();

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
        {warehouses?.map((warehouse) => (
            <WarehouseListItem key={warehouse.id} warehouse={warehouse} />
        ))}
        </div>
    </div>
    </section>
);
};

export default WarehouseList;
