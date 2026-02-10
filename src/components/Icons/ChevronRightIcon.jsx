import chevronRight from "../../assets/icons/chevron_right-24px.svg";

const ChevronRightIcon = ({ className = "", ariaLabel = "Open" }) => {
return (
    <img
    src={chevronRight}
    className={`chevron-icon ${className}`.trim()}
    alt=""
    aria-label={ariaLabel}
    aria-hidden="true"
    />
);
};

export default ChevronRightIcon;
