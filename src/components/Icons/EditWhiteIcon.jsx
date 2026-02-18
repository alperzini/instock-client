import editWhiteIcon from "../../assets/icons/editWhite-24px.svg";

const EditWhiteIcon = ({ ariaLabel = "Edit White", className = "" }) => {
return (
    <img
    src={editWhiteIcon}
    className={`icon-button ${className}`}
    alt=""
    aria-label={ariaLabel}
    />
);
};

export default EditWhiteIcon;
