import "./InventoryItemDetailsPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const InventoryItemDetailsPage = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await axios.get(`${API_BASE_URL}/inventories/${inventoryId}`);
      setItem(res.data);
    };

    fetchItem();
  }, [inventoryId]);

  return (
    <PageWrapper>
      <main className="inventory-item-details-page">
        {!item ? <p>Loading...</p> : <InventoryItemDetails item={item} />}
      </main>
    </PageWrapper>
  );
};

// export default function InventoryItemDetailsPage() {
//   const navigate = useNavigate();
//   const { id } = useParams(); // 

//   const [inventoryItem, setInventoryItem] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchInventoryItem = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_BASE_URL}/inventories/${id}`);
//         setInventoryItem(res.data);
//       } catch (error) {
//         console.error("Failed to fetch inventory item", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchInventoryItem();
//   }, [id]);

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleEdit = () => {
//     navigate(`/inventory/edit/${id}`);
//   };

//   if (isLoading) {
//     return (
//       <main className="inventory-item-details-page">
//         <section className="inventory-item-details-page__card">
//           <p className="inventory-item-details-page__loading">Loading...</p>
//         </section>
//       </main>
//     );
//   }

//   if (!inventoryItem) {
//     return (
//       <main className="inventory-item-details-page">
//         <section className="inventory-item-details-page__card">
//           <p className="inventory-item-details-page__loading">
//             Inventory item not found.
//           </p>
//         </section>
//       </main>
//     );
//   }

//   const {
//     item_name,
//     description,
//     category,
//     status,
//     quantity,
//     warehouse_name,
//   } = inventoryItem;

//   const statusClass =
//     status?.toLowerCase() === "in stock" || status?.toLowerCase() === "in-stock"
//       ? "tag tag--in-stock"
//       : "tag tag--out-of-stock";

//   return (
//     <main className="inventory-item-details-page">
//       <section className="inventory-item-details-page__card">
//         <header className="inventory-item-details-page__header">
//           <button
//             type="button"
//             className="inventory-item-details-page__back"
//             onClick={handleBack}
//             aria-label="Back"
//           >
//             <img src={backIcon} alt="" />
//           </button>

//           <h1 className="inventory-item-details-page__title">{item_name}</h1>

//           <button
//             type="button"
//             className="inventory-item-details-page__edit-btn"
//             onClick={handleEdit}
//           >
//             <img className="inventory-item-details-page__edit-icon" src={editIcon} alt="" />
//             Edit
//           </button>

//           <button
//             type="button"
//             className="inventory-item-details-page__edit-btn--mobile"
//             onClick={handleEdit}
//             aria-label="Edit"
//           >
//             <img src={editIcon} alt="" />
//           </button>
//         </header>

//         <div className="inventory-item-details-page__divider" />

//         <div className="inventory-item-details-page__details">
//           <div className="inventory-item-details-page__left">
//             <div className="inventory-item-details-page__block">
//               <h4 className="inventory-item-details-page__label">ITEM DESCRIPTION:</h4>
//               <p className="inventory-item-details-page__value">{description}</p>
//             </div>

//             <div className="inventory-item-details-page__block">
//               <h4 className="inventory-item-details-page__label">CATEGORY:</h4>
//               <p className="inventory-item-details-page__value">{category}</p>
//             </div>
//           </div>

//           <div className="inventory-item-details-page__right">
//             <div className="inventory-item-details-page__row">
//               <div className="inventory-item-details-page__block">
//                 <h4 className="inventory-item-details-page__label">STATUS:</h4>
//                 <span className={statusClass}>{status}</span>
//               </div>

//               <div className="inventory-item-details-page__block">
//                 <h4 className="inventory-item-details-page__label">QUANTITY:</h4>
//                 <p className="inventory-item-details-page__value">{quantity}</p>
//               </div>
//             </div>

//             <div className="inventory-item-details-page__block">
//               <h4 className="inventory-item-details-page__label">WAREHOUSE:</h4>
//               <p className="inventory-item-details-page__value">{warehouse_name}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
export default InventoryItemDetailsPage;