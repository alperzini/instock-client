import "./DeleteWarehouseModal.scss";

const DeleteWarehouseModal = ({ isOpen, warehouseName, onClose, onDelete }) => {
if (!isOpen) return null;

return (
    <div className="delete-modal" role="dialog" aria-modal="true">
    <div className="delete-modal__overlay" onClick={onClose} />

    <div className="delete-modal__card">
        <button
        type="button"
        className="delete-modal__close"
        onClick={onClose}
        aria-label="Close"
        >
        ×
        </button>

        <h1 className="delete-modal__title">Delete {warehouseName} warehouse?</h1>
        <p className="delete-modal__text">
        Please confirm that you’d like to delete the {warehouseName} from the list of warehouses. You won’t be able to undo this action.
        </p>

        <div className="delete-modal__actions">
        <button type="button" className="delete-modal__btn delete-modal__btn--secondary" onClick={onClose}>
            Cancel
        </button>
        <button type="button" 
        className="delete-modal__btn delete-modal__btn--delete" 
        onClick={onDelete}>
            Delete
        </button>
        </div>
    </div>
    </div>
);
};

export default DeleteWarehouseModal;
