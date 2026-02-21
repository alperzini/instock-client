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
   className="warehouse-inventory-item">

   </article>
  );
};

export default WarehouseInventoryListItem;