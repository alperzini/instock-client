import { Link } from "react-router-dom";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import "./InventoryNameLink.scss";

const InventoryNameLink = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={`inventory-name-link ${className}`.trim()}>
      <span className="inventory-name-link__text">{children}</span>
      <ChevronRightIcon />
    </Link>
  );
};

export default InventoryNameLink;