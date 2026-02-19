import editIcon from "../../assets/icons/edit-24px.svg";

const EditIcon = ({ ariaLabel = "Edit" }) => {
return (
    <img 
    src={editIcon} 
    className="icon-button"
    aria-label={ariaLabel} />
);
};

export default EditIcon;