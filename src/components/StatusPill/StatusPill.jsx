import "./StatusPill.scss";

const StatusPill = ({ status = "" }) => {
const normalized = String(status).toLowerCase().trim();

const variant =
    normalized === "in stock" || normalized === "instock" || normalized === "in_stock"
    ? "in-stock"
    : "out-of-stock";

const label = variant === "in-stock" ? "IN STOCK" : "OUT OF STOCK";

return <span className={`status-pill status-pill--${variant}`}>{label}</span>;
};

export default StatusPill;
