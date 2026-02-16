import "./WarehouseDetails.scss";
import BackArrowButton from "../Button/BackArrowButton/BackArrowButton";
import EditIcon from "../Icons/EditIcon";

const WarehouseDetails = ({ warehouse, onEdit }) => {
if (!warehouse) return null;

return (
    <section className="warehouse-details">
    <header className="warehouse-details__header">
        <div className="warehouse-details__title-wrap">
        <BackArrowButton />
        <h1 className="warehouse-details__title">{warehouse.warehouse_name}</h1>
        </div>

        <button
        type="button"
        className="warehouse-details__edit"
        onClick={onEdit}
        aria-label="Edit warehouse"
        >
        <EditIcon />
        <span className="warehouse-details__edit-text">Edit</span>
        </button>
    </header>

    <div className="warehouse-details__divider" />

    <div className="warehouse-details__info">
        <div className="warehouse-details__block warehouse-details__block--address">
        <p className="warehouse-details__label">WAREHOUSE ADDRESS:</p>
        <p className="warehouse-details__value">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
        </p>
        </div>

        <div className="warehouse-details__block">
        <p className="warehouse-details__label">CONTACT NAME:</p>
        <p className="warehouse-details__value">{warehouse.contact_name}</p>
        <p className="warehouse-details__value">{warehouse.contact_position}</p>
        </div>

        <div className="warehouse-details__block">
        <p className="warehouse-details__label">CONTACT INFORMATION:</p>
        <p className="warehouse-details__value">{warehouse.contact_phone}</p>
        <p className="warehouse-details__value">{warehouse.contact_email}</p>
        </div>
    </div>
    </section>
);
};

export default WarehouseDetails;
