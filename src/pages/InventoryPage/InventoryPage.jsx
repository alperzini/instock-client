import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./InventoryPage.scss";

import searchIcon from "../../assets/icons/search-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

const InventoryPage = ({ inventory, setInventory }) => {
  const navigate = useNavigate();
  const BACKEND_URL = "http://localhost:8080";

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/inventory`);
        setInventory(res.data);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };

    fetchInventory();
  }, [setInventory]);

  const handleAddNew = () => navigate("/addInventory");

  const handleRowClick = (inventoryId) => navigate(`/inventory/${inventoryId}`);

  const handleEditClick = (e, inventoryId) => {
    e.stopPropagation();
    navigate(`/editInventory/${inventoryId}`);
  };

  const handleDeleteClick = (e, inventoryId) => {
    e.stopPropagation();
    // Later task: open Delete Inventory modal here
    console.log("Open delete modal for inventory id:", inventoryId);
  };

  return (
    <main className="inventory-page">
      <section className="inventory-page__card">
        <div className="inventory-page__top">
          <h1 className="inventory-page__title">Inventory</h1>

          <div className="inventory-page__controls">
            <div className="inventory-page__search">
              <img
                className="inventory-page__search-icon"
                src={searchIcon}
                alt="search"
              />
              <input
                className="inventory-page__search-input"
                type="text"
                placeholder="Search..."
              />
            </div>

            <button
              type="button"
              className="inventory-page__add"
              onClick={handleAddNew}
            >
              + Add New Item
            </button>
          </div>
        </div>

        {/* TABLE HEADER (tablet/desktop only) */}
        <div className="inventory-page__header-row">
          <div className="inventory-page__h inventory-page__h--item">
            INVENTORY ITEM <img src={sortIcon} alt="" />
          </div>
          <div className="inventory-page__h inventory-page__h--category">
            CATEGORY <img src={sortIcon} alt="" />
          </div>
          <div className="inventory-page__h inventory-page__h--status">
            STATUS <img src={sortIcon} alt="" />
          </div>
          <div className="inventory-page__h inventory-page__h--qty">
            QTY <img src={sortIcon} alt="" />
          </div>
          <div className="inventory-page__h inventory-page__h--warehouse">
            WAREHOUSE <img src={sortIcon} alt="" />
          </div>
          <div className="inventory-page__h inventory-page__h--actions">
            ACTIONS
          </div>
        </div>

        {/* LIST */}
        <ul className="inventory-page__rows">
          {inventory?.map((item) => (
            <li
              key={item.id}
              className="inventory-page__row"
              onClick={() => handleRowClick(item.id)}
            >
              {/* MOBILE CARD */}
              <div className="inventory-page__mobile">
                <div className="inventory-page__mobile-left">
                  <p className="inventory-page__label">INVENTORY ITEM</p>
                  <div className="inventory-page__link">
                    <span className="inventory-page__name">
                      {item.item_name}
                    </span>
                    <img src={chevronRight} alt="" />
                  </div>

                  <p className="inventory-page__label">CATEGORY</p>
                  <p className="inventory-page__value">{item.category}</p>
                </div>

                <div className="inventory-page__mobile-right">
                  <p className="inventory-page__label">STATUS</p>
                  <span
                    className={
                      item.status?.toLowerCase() === "out of stock"
                        ? "inventory-page__tag inventory-page__tag--out"
                        : "inventory-page__tag inventory-page__tag--in"
                    }
                  >
                    {item.status}
                  </span>

                  <p className="inventory-page__label">QTY</p>
                  <p className="inventory-page__value">{item.quantity}</p>

                  <p className="inventory-page__label">WAREHOUSE</p>
                  <p className="inventory-page__value">{item.warehouse_name}</p>
                </div>

                <div className="inventory-page__mobile-actions">
                  <button
                    type="button"
                    className="inventory-page__icon-btn"
                    onClick={(e) => handleDeleteClick(e, item.id)}
                    aria-label="Delete inventory item"
                  >
                    <img src={deleteIcon} alt="" />
                  </button>

                  <button
                    type="button"
                    className="inventory-page__icon-btn"
                    onClick={(e) => handleEditClick(e, item.id)}
                    aria-label="Edit inventory item"
                  >
                    <img src={editIcon} alt="" />
                  </button>
                </div>
              </div>

              {/* TABLE ROW (tablet/desktop) */}
              <div className="inventory-page__desktop">
                <div className="inventory-page__cell inventory-page__cell--item">
                  <div className="inventory-page__link">
                    <span className="inventory-page__name">{item.item_name}</span>
                    <img src={chevronRight} alt="" />
                  </div>
                </div>

                <div className="inventory-page__cell">{item.category}</div>

                <div className="inventory-page__cell">
                  <span
                    className={
                      item.status?.toLowerCase() === "out of stock"
                        ? "inventory-page__tag inventory-page__tag--out"
                        : "inventory-page__tag inventory-page__tag--in"
                    }
                  >
                    {item.status}
                  </span>
                </div>

                <div className="inventory-page__cell">{item.quantity}</div>

                <div className="inventory-page__cell">{item.warehouse_name}</div>

                <div className="inventory-page__cell inventory-page__cell--actions">
                  <button
                    type="button"
                    className="inventory-page__icon-btn"
                    onClick={(e) => handleDeleteClick(e, item.id)}
                    aria-label="Delete inventory item"
                  >
                    <img src={deleteIcon} alt="" />
                  </button>

                  <button
                    type="button"
                    className="inventory-page__icon-btn"
                    onClick={(e) => handleEditClick(e, item.id)}
                    aria-label="Edit inventory item"
                  >
                    <img src={editIcon} alt="" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default InventoryPage;
