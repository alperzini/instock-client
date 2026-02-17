import sortIcon from "../../assets/icons/sort-24px.svg";

const SortIcon = ({ onClick, ariaLabel = "Sort" }) => {
return (
    <button
    type="button"
    className="icon-button icon-button--sort"
    aria-label={ariaLabel}
    onClick={onClick}
    >
    <img src={sortIcon} alt="" />
    </button>
);
};

export default SortIcon;
