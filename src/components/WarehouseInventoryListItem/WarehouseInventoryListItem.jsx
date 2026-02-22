import "./WarehouseInventoryListItem.scss";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import StatusPill from "../StatusPill/StatusPill";
import InventoryNameLink from "../InventoryNameLink/InventoryNameLink";

const WarehouseInventoryListItem = ({ item, onDelete, onEdit }) => {
  const navigate = useNavigate();

  return (
    <article
      className="warehouse-inventory-item"
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/inventory/${item.id}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/inventory/${item.id}`)}
    >
      <div className="warehouse-inventory-item__cell warehouse-inventory-item__cell--item">
        <p className="warehouse-inventory-item__label">INVENTORY ITEM</p>
        <InventoryNameLink to={`/inventory/${item.id}`}> {item.item_name}
        </InventoryNameLink>
      </div>

      <div className="warehouse-inventory-item__cell">
        <p className="warehouse-inventory-item__label">CATEGORY</p>
        <p className="warehouse-inventory-item__value">{item.category}</p>
      </div>

      <div className="warehouse-inventory-item__cell">
        <p className="warehouse-inventory-item__label">STATUS</p>
        <StatusPill status={item.status} />
      </div>

      <div className="warehouse-inventory-item__cell">
        <p className="warehouse-inventory-item__label">QTY</p>
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