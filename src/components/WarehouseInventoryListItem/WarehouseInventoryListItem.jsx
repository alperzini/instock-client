import "./WarehouseInventoryListItem.scss";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import StatusPill from "../StatusPill/StatusPill";
import InventoryNameLink from "../InventoryNameLink/InventoryNameLink";

const WarehouseInventoryListItem = ({ item, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const goToDetails = () => navigate(`/inventory/${item.id}`);

  return (
    <article
      className="warehouse-inventory-item"
      role="button"
      tabIndex={0}
      onClick={goToDetails}
      onKeyDown={(e) => e.key === "Enter" && goToDetails()}
    >
      <div className="warehouse-inventory-item__cell warehouse-inventory-item__cell--item">
        <p className="warehouse-inventory-item__label">INVENTORY ITEM</p>
        <InventoryNameLink to={`/inventory/${item.id}`}>
          {item.item_name}
        </InventoryNameLink>
      </div>

      <div className="warehouse-inventory-item__cell warehouse-inventory-item__cell--status">
        <p className="warehouse-inventory-item__label">STATUS</p>
        <StatusPill status={item.status} />
      </div>

      <div className="warehouse-inventory-item__cell warehouse-inventory-item__cell--category">
        <p className="warehouse-inventory-item__label">CATEGORY</p>
        <p className="warehouse-inventory-item__value">{item.category}</p>
      </div>

      <div className="warehouse-inventory-item__cell warehouse-inventory-item__cell--qty">
        <p className="warehouse-inventory-item__label">
          <span className="display-mobile-only">QTY</span>
          <span className="display-tablet-desktop-only">QUANTITY</span>
        </p>
        <p className="warehouse-inventory-item__value">{item.quantity}</p>
      </div>

      <div
        className="warehouse-inventory-item__actions"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="warehouse-inventory-item__icon-btn"
          aria-label={`Delete ${item.item_name}`}
          onClick={() => onDelete?.(item)}
        >
          <DeleteIcon />
        </button>

        <button
          type="button"
          className="warehouse-inventory-item__icon-btn"
          aria-label={`Edit ${item.item_name}`}
          onClick={() => onEdit?.(item.id)}
        >
          <EditIcon />
        </button>
      </div>
    </article>
  );
};

export default WarehouseInventoryListItem;