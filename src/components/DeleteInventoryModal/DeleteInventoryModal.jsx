import CloseIcon from "../Icons/CloseIcon";
import "./DeleteInventoryModal.scss";

const DeleteInventoryModal = ({ isOpen, itemName, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-modal" role="dialog" aria-modal="true">
      <button
        type="button"
        className="delete-modal__overlay"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="delete-modal__card" role="document">
        <button
          type="button"
          className="delete-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <h1 className="delete-modal__title">Delete {itemName} inventory item?</h1>

        <p className="delete-modal__text">
          Please confirm that you’d like to delete {itemName} from the inventory list.
          You won’t be able to undo this action.
        </p>

        <div className="delete-modal__actions">
          <button
            type="button"
            className="delete-modal__btn delete-modal__btn--secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="delete-modal__btn delete-modal__btn--delete"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteInventoryModal;