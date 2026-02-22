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

export default InventoryItemDetailsPage;