import { useState, useEffect } from "react";
import axios from "axios";
import "./WarehouseDetailsPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";

const WarehouseDetailsPage = () => {
  const { warehouseId } = useParams();
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PORT = import.meta.env.VITE_BACKEND_PORT || 8080;

  // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  // const PORT = import.meta.env.VITE_BACKEND_PORT;
  
  const [warehouse, setWarehouse] = useState(null);
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      const res = await axios.get(`${BACKEND_URL}${PORT}/warehouses/${warehouseId}`);
      setWarehouse(res.data);
    };

    const fetchWarehouseInventory = async () => {
      const res = await axios.get(`${BACKEND_URL}${PORT}/warehouses/${warehouseId}/inventories`);
      setWarehouseInventory(res.data);
    };

    fetchWarehouse();
    fetchWarehouseInventory();
  }, [BACKEND_URL, PORT, warehouseId]);

  const handleEdit = (inventoryId) => navigate(`/editInventory/${inventoryId}`);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedItem) return;

    await axios.delete(`${BACKEND_URL}${PORT}/inventories/${selectedItem.id}`);
    setWarehouseInventory((prev) => prev.filter((i) => i.id !== selectedItem.id));
    handleCloseDelete();
  };

  return (
    <PageWrapper>
    <main className="warehouse-details-page">
      <WarehouseDetails
        warehouse={warehouse}
        onEdit={() => navigate(`/editWarehouse/${warehouseId}`)}
      />

      <WarehouseInventoryList
        inventory={warehouseInventory}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      <DeleteInventoryModal
        isOpen={isDeleteOpen}
        itemName={selectedItem?.item_name}
        onClose={handleCloseDelete}
        onDelete={handleConfirmDelete}
      /> 
    </main>
  </PageWrapper>
  );
};

export default WarehouseDetailsPage;