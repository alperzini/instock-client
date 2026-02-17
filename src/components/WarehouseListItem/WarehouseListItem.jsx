import "./WarehouseListItem.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import WarehouseNameLink from "../WarehouseNameLink/WarehouseNameLink";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal";

const WarehouseListItem = ({ warehouse }) => {

    const navigate = useNavigate();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const closeDelete = () => setIsDeleteOpen(false);

    const confirmDelete = () => {
        onDelete?.(warehouse.id);
        closeDelete();
    };

return (
    <>
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
            <button
                type="button"
                className="warehouse-item__icon-btn"
                onClick={() => setIsDeleteOpen(true)}
                aria-label={`Delete ${warehouse.warehouse_name}`}
            >
                <DeleteIcon />
            </button>

            <button
                type="button"
                className="warehouse-item__icon-btn"
                onClick={() => navigate(`/editWarehouse/${warehouse.id}`)}
                aria-label={`Edit ${warehouse.warehouse_name}`}
            >
                <EditIcon />
            </button>
            </div>
    </article>

    <DeleteWarehouseModal
        isOpen={isDeleteOpen}
        warehouseName={warehouse.warehouse_name}
        onClose={closeDelete}
        onDelete={confirmDelete}
      />

    </>

);
};

export default WarehouseListItem;