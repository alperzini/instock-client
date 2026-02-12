import chevronRight from "../../assets/icons/chevron_right-24px.svg";

const ChevronRightIcon = ({ className = "" }) => {
return (
    <img
    src={chevronRight}
    className={`warehouse-chevron ${className}`.trim()}
    alt=""
    aria-hidden="true"
    />
);
};

export default ChevronRightIcon;
