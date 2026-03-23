import "./InventoryList.scss";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchField from "../SearchField/SearchField";
import Button from "../Button/Button";
import SortIcon from "../Icons/SortIcon";

import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import WarehouseNameLink from "../WarehouseNameLink/WarehouseNameLink";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PageNotFound from "../PageNotFound/PageNotFound";
import PageWrapper from "../PageWrapper/PageWrapper";

// ===== Row Component (same pattern as WarehouseListItem) =====
const InventoryListItem = ({ item, warehouseName, onDeleted }) => {
  const navigate = useNavigate();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // guard (prevents crash even if something weird happens)
  if (!item) return null;

  const closeDelete = () => setIsDeleteOpen(false);

  const confirmDelete = async () => {
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:";
      const PORT = import.meta.env.VITE_BACKEND_PORT || import.meta.env.VITE_PORT || (import.meta.env.VITE_BACKEND_URL ? "" : "8080");
      const baseUrl = `${BACKEND_URL}${PORT}`;

      await axios.delete(`${baseUrl}/inventories/${item.id}`);

      onDeleted?.(item.id);
      closeDelete();
    } catch (err) {
      console.error("Delete inventory failed:", err);
    }
  };

  const statusLower = String(item.status || "").toLowerCase();
  const isOut = statusLower.includes("out");

  return (
    <>
      <article className="inventory-item">
        <div className="inventory-item__cell inventory-item__cell--name">
          <p className="inventory-item__label">INVENTORY ITEM</p>
          <WarehouseNameLink to={`/inventory/${item.id}`}>
            {item.item_name}
          </WarehouseNameLink>
        </div>

        <div className="inventory-item__cell inventory-item__cell--category">
          <p className="inventory-item__label">CATEGORY</p>
          <p className="inventory-item__value">{item.category}</p>
        </div>

        <div className="inventory-item__cell inventory-item__cell--status">
          <p className="inventory-item__label">STATUS</p>
          <span
            className={`inventory-item__tag ${isOut ? "inventory-item__tag--out" : "inventory-item__tag--in"
              }`}
          >
            {String(item.status || "").toUpperCase()}
          </span>
        </div>

        <div className="inventory-item__cell inventory-item__cell--qty">
          <p className="inventory-item__label">
            <span className="display-mobile-only">QTY</span>
            <span className="display-tablet-desktop-only">QUANTITY</span>
          </p>
          <p className="inventory-item__value">{item.quantity}</p>
        </div>

        <div className="inventory-item__cell inventory-item__cell--warehouse">
          <p className="inventory-item__label">WAREHOUSE</p>
          <p className="inventory-item__value">{warehouseName}</p>
        </div>

        <div className="inventory-item__actions">
          <button
            type="button"
            className="inventory-item__icon-btn"
            onClick={() => setIsDeleteOpen(true)}
            aria-label={`Delete ${item.item_name}`}
          >
            <DeleteIcon />
          </button>

          <button
            type="button"
            className="inventory-item__icon-btn"
            onClick={() => navigate(`/editInventory/${item.id}`)}
            aria-label={`Edit ${item.item_name}`}
          >
            <EditIcon />
          </button>
        </div>
      </article>

      <DeleteInventoryModal
        isOpen={isDeleteOpen}
        itemName={item.item_name}
        onClose={closeDelete}
        onDelete={confirmDelete}
      />
    </>
  );
};

// ===== Main List Component =====
const InventoryList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [inventories, setInventories] = useState([]);
  const [warehousesById, setWarehousesById] = useState({});
  const [isLodaing, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:";
  const PORT = import.meta.env.VITE_BACKEND_PORT || import.meta.env.VITE_PORT || (import.meta.env.VITE_BACKEND_URL ? "" : "8080");
  const baseUrl = `${BACKEND_URL}${PORT}`;

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [invRes, whRes] = await Promise.all([
          axios.get(`${baseUrl}/inventories`),
          axios.get(`${baseUrl}/warehouses`),
        ]);

        // inventories might be an array OR wrapped in an object. handle both.
        const invData = Array.isArray(invRes.data)
          ? invRes.data
          : invRes.data?.inventories || [];

        const whData = Array.isArray(whRes.data)
          ? whRes.data
          : whRes.data?.warehouses || [];

        setInventories(invData);

        const map = {};
        whData.forEach((w) => {
          map[w.id] = w.warehouse_name;
        });
        setWarehousesById(map);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsNotFound(true);
        console.error("InventoryList fetch error:", err);
      }
    };

    fetchAll();
  }, [baseUrl]);

  const filtered = useMemo(() => {
    // search not required to work, but this is safe & simple
    if (!search.trim()) return inventories;

    const s = search.toLowerCase();
    return inventories.filter((i) =>
      `${i.item_name} ${i.category} ${i.status} ${i.quantity}`
        .toLowerCase()
        .includes(s)
    );
  }, [inventories, search]);

  const handleDeleted = (id) => {
    setInventories((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    (inventories.length > 0) ?
      <PageWrapper>
        <section className="inventory-list">
          <div className="inventory-list__container">
            <div className="inventory-list__header">
              <h1 className="inventory-list__title">Inventory</h1>

              <div className="inventory-list__actions">
                <SearchField
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                />

                <Button variant="primary" onClick={() => navigate("/addInventory")}>
                  + Add New Item
                </Button>
              </div>
            </div>

            {/* header row (tablet/desktop) */}
            <div className="inventory-list__table-header">
              <div className="inventory-list__th">
                INVENTORY ITEM <SortIcon />
              </div>
              <div className="inventory-list__th">
                CATEGORY <SortIcon />
              </div>
              <div className="inventory-list__th">
                STATUS <SortIcon />
              </div>
              <div className="inventory-list__th">
                QTY <SortIcon />
              </div>
              <div className="inventory-list__th">
                WAREHOUSE <SortIcon />
              </div>
              <div className="inventory-list__th inventory-list__th--actions">
                ACTIONS
              </div>
            </div>

            <div className="inventory-list__rows">
              {filtered.map((item) => (
                <InventoryListItem
                  key={item.id}
                  item={item}
                  warehouseName={warehousesById[item.warehouse_id] || ""}
                  onDeleted={handleDeleted}
                />
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
      : isNotFound ?
        <PageNotFound title="500 - INTERNAL SERVER ERROR" content="The inventory list could not be fetched." />
        : isLodaing ?
          <PageWrapper>
            <LoadingSpinner delay={5000} />
          </PageWrapper >
          : ""
  );
};

export default InventoryList;