import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

const DeleteIcon = ({ ariaLabel = "Delete" }) => {
  return (
    <img
      src={deleteIcon}
      alt={ariaLabel}
      className="icon-button"
    />
  );
};

export default DeleteIcon;