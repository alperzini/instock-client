import "./WarehouseListItem.scss";

const WarehouseListItem = ({ warehouse }) => {
    return (
    
        <article className="warehouse-item">
        <div className="warehouse-item__name">
        {warehouse.warehouse_name}
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
        <button>Delete</button>
        <button>Edit</button>
        </div>
    </article>

    );
};

export default WarehouseListItem;