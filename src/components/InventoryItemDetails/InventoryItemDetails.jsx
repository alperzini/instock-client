import "./InventoryItemDetails.scss";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Button from "../Button/Button";
import BackArrowButton from "../customButtons/BackArrowButton/BackArrowButton";
import WarehouseNameLink from "../WarehouseNameLink/WarehouseNameLink";

import editIcon from "../../assets/icons/edit-24px.svg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost";
const PORT = import.meta.env.VITE_BACKEND_PORT || 8080;
const baseUrl = `${BACKEND_URL}:${PORT}`;

/**
 * InventoryItemDetails
 * - If `item` prop is provided, it renders it (same as before).
 * - If `item` prop is NOT provided, it fetches using the URL param `inventoryId`.
 * - Also enriches item with `warehouse_name` via GET /warehouses/:id
 */
const InventoryItemDetails = ({ item: itemProp }) => {
  const navigate = useNavigate();
  const { inventoryId } = useParams();

  const [item, setItem] = useState(itemProp ?? null);

  useEffect(() => {
    // If the page already passed item, do nothing.
    if (itemProp) {
      setItem(itemProp);
      return;
    }

    // If we don't have an id, we can't fetch.
    if (!inventoryId) return;

    const fetchItem = async () => {
      try {
        // 1) fetch inventory item
        const invRes = await axios.get(`${baseUrl}/inventories/${inventoryId}`);
        const invItem = invRes.data;

        // 2) fetch warehouse name (because inventory only has warehouse_id)
        let warehouseName = invItem?.warehouse_name || "";
        if (invItem?.warehouse_id) {
          const whRes = await axios.get(
            `${baseUrl}/warehouses/${invItem.warehouse_id}`
          );
          warehouseName = whRes.data?.warehouse_name || "";
        }

        setItem({ ...invItem, warehouse_name: warehouseName });
      } catch (error) {
        console.error("Failed to fetch inventory item details:", error);
        setItem(null);
      }
    };

    fetchItem();
  }, [itemProp, inventoryId]);

  const statusLower = String(item?.status || "").toLowerCase();
  const isOut = statusLower.includes("out");

  if (!item) return null; // keep it simple (or show loader if you want)

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
                  isOut
                    ? "inventory-item-details__tag--out"
                    : "inventory-item-details__tag--in"
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