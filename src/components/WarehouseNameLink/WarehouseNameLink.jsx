import { Link } from "react-router-dom";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import "./WarehouseNameLink.scss";

const WarehouseNameLink = ({ to, children, className = "" }) => {
return (
    <Link to={to} className={`warehouse-name-link ${className}`.trim()}>
    <span className="warehouse-name-link__text">{children}</span>
    <ChevronRightIcon />
    </Link>
);
};

export default WarehouseNameLink;
