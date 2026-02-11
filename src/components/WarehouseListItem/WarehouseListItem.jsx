import "./WarehouseListItem.scss";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import WarehouseNameLink from "../WarehouseNameLink/WarehouseNameLink";

const WarehouseListItem = ({ warehouse }) => {
return (
    <article className="warehouse-item">
    <div className="warehouse-item__cell warehouse-item__cell--warehouse">
        <p className="warehouse-item__label">WAREHOUSE</p>
        <WarehouseNameLink to={`/warehouse/${warehouse.id}`}>
        {warehouse.warehouse_name}
        </WarehouseNameLink>
    </div>

    <div className="warehouse-item__cell warehouse-item__cell--address">
        <p className="warehouse-item__label">ADDRESS</p>
        <p className="warehouse-item__value">
        {warehouse.address}, {warehouse.city}, {warehouse.country}
        </p>
    </div>

    <div className="warehouse-item__cell warehouse-item__cell--contact">
        <p className="warehouse-item__label">CONTACT NAME</p>
        <p className="warehouse-item__value">{warehouse.contact_name}</p>
    </div>

    <div className="warehouse-item__cell warehouse-item__cell--info">
        <p className="warehouse-item__label">CONTACT INFORMATION</p>
        <p className="warehouse-item__value">{warehouse.contact_phone}</p>
        <p className="warehouse-item__value">{warehouse.contact_email}</p>
    </div>

    <div className="warehouse-item__actions">
        <DeleteIcon />
        <EditIcon />
    </div>
    </article>
);
};

export default WarehouseListItem;
