import "./InventoryItemDetails.scss";

import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import BackArrowButton from "../customButtons/BackArrowButton/BackArrowButton";
import WarehouseNameLink from "../WarehouseNameLink/WarehouseNameLink";

import editIcon from "../../assets/icons/edit-24px.svg";

const InventoryItemDetails = ({ item }) => {
  const navigate = useNavigate();

  const statusLower = String(item?.status || "").toLowerCase();
  const isOut = statusLower.includes("out");

  return (
    <section className="inventory-item-details">
      <header className="inventory-item-details__header">
        <div className="inventory-item-details__title-group">
          <BackArrowButton />
          <h1 className="inventory-item-details__title">{item?.item_name}</h1>
        </div>

        <Button
          variant="primary"
          className="inventory-item-details__edit-btn"
          onClick={() => navigate(`/editInventory/${item?.id}`)}
        >
          <img className="inventory-item-details__edit-icon" src={editIcon} alt="" />
          <span className="inventory-item-details__edit-text">Edit</span>
        </Button>
      </header>

      <div className="inventory-item-details__divider" />

      <div className="inventory-item-details__content">
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
          <div className="inventory-item-details__top">
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

            {item?.warehouse_id ? (
              <WarehouseNameLink to={`/warehouses/${item.warehouse_id}`}>
                {item?.warehouse_name}
              </WarehouseNameLink>
            ) : (
              <p className="inventory-item-details__value">{item?.warehouse_name}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
