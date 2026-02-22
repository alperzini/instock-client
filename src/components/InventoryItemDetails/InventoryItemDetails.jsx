import "./InventoryItemDetails.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BackArrowButton from "../customButtons/BackArrowButton/BackArrowButton";

// ✅ this file EXISTS in your zip: src/assets/icons/editWhite-24px.svg
import editWhiteIcon from "../../assets/icons/editWhite-24px.svg";

// ✅ match your project pattern (works in Vite)
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const InventoryItemDetails = ({ item }) => {
  const navigate = useNavigate();

  const statusLower = String(item?.status || "").toLowerCase();
  const isOut = statusLower.includes("out");

  // ✅ fetched warehouse name
  const [warehouseName, setWarehouseName] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchWarehouseName = async () => {
      // Try common keys safely
      const warehouseId =
        item?.warehouse_id ?? item?.warehouseId ?? item?.warehouse?.id ?? null;

      if (!warehouseId) {
        if (isMounted) setWarehouseName("");
        return;
      }

      try {
        const res = await axios.get(`${API_BASE_URL}/warehouses/${warehouseId}`);

        // Depending on backend shape, name might be in different fields
        const name =
          res.data?.warehouse_name ?? res.data?.name ?? res.data?.warehouse ?? "";

        if (isMounted) setWarehouseName(name);
      } catch (err) {
        if (isMounted) setWarehouseName("");
        console.error("Failed to fetch warehouse:", err);
      }
    };

    fetchWarehouseName();

    return () => {
      isMounted = false;
    };
  }, [item]);

  return (
    <section className="inventory-item-details">
      <header className="inventory-item-details__header">
        <div className="inventory-item-details__title-wrap">
          <BackArrowButton />
          <h1 className="inventory-item-details__title">{item?.item_name}</h1>
        </div>

        <button
          type="button"
          className="inventory-item-details__edit"
          onClick={() => navigate(`/editInventory/${item?.id}`)}
        >
          <img src={editWhiteIcon} alt="" />
          <span className="inventory-item-details__edit-text">Edit</span>
        </button>
      </header>

      <div className="inventory-item-details__divider" />

      <div className="inventory-item-details__info">
        <div className="inventory-item-details__block inventory-item-details__block--left">
          <p className="inventory-item-details__label">ITEM DESCRIPTION:</p>
          <p className="inventory-item-details__value">{item?.description}</p>
        </div>

        <div className="inventory-item-details__block inventory-item-details__block--category">
          <p className="inventory-item-details__label">CATEGORY:</p>
          <p className="inventory-item-details__value">{item?.category}</p>
        </div>

        <div className="inventory-item-details__block inventory-item-details__block--status">
          <p className="inventory-item-details__label">STATUS:</p>
          <span
            className={`inventory-item-details__tag ${
              isOut ? "inventory-item-details__tag--out" : "inventory-item-details__tag--in"
            }`}
          >
            {String(item?.status || "").toUpperCase()}
          </span>
        </div>

        <div className="inventory-item-details__block inventory-item-details__block--qty">
          <p className="inventory-item-details__label">QUANTITY:</p>
          <p className="inventory-item-details__value">{item?.quantity}</p>
        </div>

        <div className="inventory-item-details__block inventory-item-details__block--warehouse">
          <p className="inventory-item-details__label">WAREHOUSE:</p>
          {/* ✅ NOT clickable + fetched from /warehouses/:id */}
          <p className="inventory-item-details__value">
            {warehouseName || "—"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
