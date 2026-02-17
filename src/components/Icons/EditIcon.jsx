import editIcon from "../../assets/icons/edit-24px.svg";

const EditIcon = ({ onClick, ariaLabel = "Edit" }) => {
return (
    <button
    type="button"
    className="icon-button"
    aria-label={ariaLabel}
    onClick={onClick}
    >
    <img src={editIcon} alt="" />
    </button>
);
};

export default EditIcon;