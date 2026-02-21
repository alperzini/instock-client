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

      <div className="warehouse-inventory__table-header" role="row">
        <div className="warehouse-inventory__th" role="columnheader">INVENTORY ITEM <SortIcon /></div>
        <div className="warehouse-inventory__th" role="columnheader">CATEGORY <SortIcon /></div>
        <div className="warehouse-inventory__th" role="columnheader">STATUS <SortIcon /></div>
        <div className="warehouse-inventory__th" role="columnheader">OTY <SortIcon /></div>
        <div className="warehouse-inventory__th" role="columnheader">ACTIONS <SortIcon /></div>

    <div className="warehouse-inventory__row">
    {inventory.map((item) => (
        <WarehouseInventoryList
        key={item.id}
        item={item}
        onDelete={onDelete}
        onEdit={onEdit}/>
    ))}
    </div>
    </div>
    </div>
    </section>
  );
};

export default WarehouseInventoryList;