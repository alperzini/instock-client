import "./InventoryItemDetails.scss";

import { useNavigate } from "react-router-dom";

import BackArrowIcon from "../Icons/BackArrowIcon";
import editIcon from "../../assets/icons/edit-24px.svg";

const InventoryItemDetails = ({ item }) => {
  const navigate = useNavigate();

  const statusLower = String(item?.status || "").toLowerCase();
  const isOut = statusLower.includes("out");

  return (
    <div className="inventory-item-details">
      <div className="inventory-item-details__header">
        <div className="inventory-item-details__title-wrap">
          <button
            type="button"
            className="inventory-item-details__back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <BackArrowIcon />
          </button>
          <h1 className="inventory-item-details__title">{item?.item_name}</h1>
        </div>

        <button
          type="button"
          className="inventory-item-details__edit"
          onClick={() => navigate(`/editInventory/${item.id}`)}
        >
          <img className="inventory-item-details__edit-icon" src={editIcon} alt="" />
          <span className="inventory-item-details__edit-text">Edit</span>
        </button>
      </div>

      <div className="inventory-item-details__divider" />

      <div className="inventory-item-details__body">
        <div className="inventory-item-details__left">
          <div className="inventory-item-details__block">
            <p className="inventory-item-details__label">ITEM DESCRIPTION:</p>
            <p className="inventory-item-details__value">{item?.description}</p>
          </div>

          <div className="inventory-item-details__block">
            <p className="inventory-item-details__label">CATEGORY:</p>
            <p className="inventory-item-details__value">{item?.category}</p>
          </div>
        </div>

        <div className="inventory-item-details__right">
          <div className="inventory-item-details__top-grid">
            <div className="inventory-item-details__block">
              <p className="inventory-item-details__label">STATUS:</p>
              <span
                className={`inventory-item-details__tag ${
                  isOut ? "inventory-item-details__tag--out" : "inventory-item-details__tag--in"
                }`}
              >
                {String(item?.status || "").toUpperCase()}
              </span>
            </div>

            <div className="inventory-item-details__block">
              <p className="inventory-item-details__label">QUANTITY:</p>
              <p className="inventory-item-details__value">{item?.quantity}</p>
            </div>
          </div>

          <div className="inventory-item-details__block">
            <p className="inventory-item-details__label">WAREHOUSE:</p>
            <p className="inventory-item-details__value">{item?.warehouse_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetails;
