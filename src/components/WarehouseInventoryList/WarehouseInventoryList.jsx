import "./WarehouseInventoryList.scss";
import { Link } from "react-router-dom";
import StatusPill from "../StatusPill/StatusPill";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import SortIcon from "../Icons/SortIcon";

const WarehouseInventoryList = ({ inventory = [], onRowClick, onEdit, onDelete }) => {
  return (
    <section className="warehouse-inventory">
    <div className="warehouse-inventory__container">
      <header className="warehouse-inventory__header">
        <h2 className="warehouse-inventory__title">Inventory</h2>
      </header>

      <div className="warehouse-inventory__table">
        <div className="warehouse-inventory__row warehouse-inventory__row--head">
          <p className="warehouse-inventory__cell warehouse-inventory__cell--item">INVENTORY ITEM</p>
          <p className="warehouse-inventory__cell warehouse-inventory__cell--category">CATEGORY</p>
          <p className="warehouse-inventory__cell warehouse-inventory__cell--status">STATUS</p>
          <p className="warehouse-inventory__cell warehouse-inventory__cell--qty">QTY</p>
          <p className="warehouse-inventory__cell warehouse-inventory__cell--actions">ACTIONS</p>
        </div>

        {inventory.map((item) => (
          <div
            key={item.id}
            className="warehouse-inventory__row"
            role="button"
            tabIndex={0}
            onClick={() => onRowClick?.(item.id)}
            onKeyDown={(e) => e.key === "Enter" && onRowClick?.(item.id)}
          >
            <div className="warehouse-inventory__cell warehouse-inventory__cell--item">
              <Link
                className="warehouse-inventory__item-link"
                to={`/inventory/${item.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                {item.item_name}
                <ChevronRightIcon />
              </Link>
            </div>

            <p className="warehouse-inventory__cell warehouse-inventory__cell--category">
              {item.category}
            </p>

            <div className="warehouse-inventory__cell warehouse-inventory__cell--status">
              <StatusPill status={item.status} />
            </div>

            <p className="warehouse-inventory__cell warehouse-inventory__cell--qty">
              {item.quantity}
            </p>

            <div
              className="warehouse-inventory__cell warehouse-inventory__cell--actions"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="warehouse-inventory__icon-btn"
                aria-label="Delete inventory item"
                onClick={() => onDelete?.(item)}
              >
                <DeleteIcon />
              </button>

              <button
                type="button"
                className="warehouse-inventory__icon-btn"
                aria-label="Edit inventory item"
                onClick={() => onEdit?.(item.id)}
              >
                <EditIcon />
              </button>
            </div>
            
          </div>
          
        ))}
      </div>
      </div>
    </section>
  );
};

export default WarehouseInventoryList;