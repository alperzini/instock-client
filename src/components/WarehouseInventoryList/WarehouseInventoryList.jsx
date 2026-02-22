import "./WarehouseInventoryList.scss";
import SortIcon from "../Icons/SortIcon";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";

const WarehouseInventoryList = ({ inventory = [], onEdit, onDelete }) => {
  return (
    <section className="warehouse-inventory">
      <div className="warehouse-inventory__container">
        <header className="warehouse-inventory__header">
          <h2 className="warehouse-inventory__title">Inventory</h2>
        </header>

        <div className="warehouse-inventory__table-header" role="row">
          <div className="warehouse-inventory__th" role="columnheader">
            INVENTORY ITEM <SortIcon />
          </div>
          <div className="warehouse-inventory__th" role="columnheader">
            CATEGORY <SortIcon />
          </div>
          <div className="warehouse-inventory__th" role="columnheader">
            STATUS <SortIcon />
          </div>
          <div className="warehouse-inventory__th" role="columnheader">
            QTY <SortIcon />
          </div>
          <div
            className="warehouse-inventory__th warehouse-inventory__th--actions"
            role="columnheader"
          >
            ACTIONS
          </div>
        </div>

        <div className="warehouse-inventory__rows">
          {inventory.map((item) => (
            <WarehouseInventoryListItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarehouseInventoryList;