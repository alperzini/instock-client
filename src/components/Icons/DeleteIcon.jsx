import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

const DeleteIcon = ({ onClick, ariaLabel = "Delete" }) => {
return (
    <button
    type="button"
    className="icon-button"
    aria-label={ariaLabel}
    onClick={onClick}
    >
    <img src={deleteIcon} alt="" />
    </button>
);
};

export default DeleteIcon;