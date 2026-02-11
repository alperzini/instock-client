import "./WarehouseListItem.scss";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import WarehouseNameLink from "../WarehouseNameLink/WarehouseNameLink";
import { Link } from "react-router-dom";

const WarehouseListItem = ({ warehouse, setWarehouse }) => {
    return (
    
        <article className="warehouse-item">
        <div className="warehouse-item__cell warehouse-item__cell--name">
        <WarehouseNameLink to={`/warehouse/${warehouse.id}`}>
        {warehouse.warehouse_name}
        </WarehouseNameLink>
        </div>

        <div className="warehouse-item__address">
        {warehouse.address}, {warehouse.city}, {warehouse.country}
        </div>

        <div className="warehouse-item__contact">
        {warehouse.contact_name}
        </div>

        <div className="warehouse-item__info">
        <p>{warehouse.contact_phone}</p>
        <p>{warehouse.contact_email}</p>
        </div>

        <div className="warehouse-item__actions">
        <DeleteIcon />
        <EditIcon />
        </div>
    </article>

    );
};

export default WarehouseListItem;