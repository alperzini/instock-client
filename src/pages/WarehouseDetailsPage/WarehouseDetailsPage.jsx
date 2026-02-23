import { useState, useEffect } from "react";
import axios from "axios";
import "./WarehouseDetailsPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

const WarehouseDetailsPage = ({ inventory, setInventory, warehouses }) => {
  const { warehouseId } = useParams();
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PORT = import.meta.env.VITE_PORT;

  const [warehouse, setWarehouse] = useState(null);
  const [warehouseInventory, setWarehouseInventory] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isWarehouseInventoryLodaing, setIsWarehouseInventoryLodaing] = useState(true);

  useEffect(() => {
    const inventoryArray = Array.isArray(inventory)
      ? inventory
      : inventory?.data || inventory?.inventories || [];
    if (inventory.length > 0) {
      setWarehouseInventory(inventoryArray.filter(
        (item) => Number(item.warehouse_id) === Number(warehouseId)
      ));
      setIsWarehouseInventoryLodaing(false);
    }
    else
      setTimeout(() => setIsWarehouseInventoryLodaing(false), 5000);
  }, [inventory]);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}${PORT}/warehouses/${warehouseId}`
        );

        setWarehouse(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsNotFound(true);
        console.error("Error fetching warehouse:", error);
      }
    };

    fetchWarehouse();
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

    try {
      await axios.delete(
        `${BACKEND_URL}${PORT}/inventories/${selectedItem.id}`
      );

      setInventory((prev) =>
        prev.filter((i) => i.id !== selectedItem.id)
      );

      handleCloseDelete();
    } catch (error) {
      console.error("Error deleting inventory item:", error);
      alert("Failed to delete item. Please try again.");
    }
  };

  return (
    (warehouse != null) ?
      (<PageWrapper>
        <main className="warehouse-details-page">
          <WarehouseDetails
            warehouse={warehouse}
            onEdit={() => navigate(`/editWarehouse/${warehouseId}`)}
          />

          {(warehouseInventory!= null && warehouseInventory.length > 0) ?
          <WarehouseInventoryList
            inventory={warehouseInventory}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          /> : isWarehouseInventoryLodaing ?
            <LoadingSpinner delay={5000} />
          : <p className="warehouse-details-page__no-inventory-p">There are no inventory items assigned to this warehouse.</p>}

          <DeleteInventoryModal
            isOpen={isDeleteOpen}
            itemName={selectedItem?.item_name}
            onClose={handleCloseDelete}
            onDelete={handleConfirmDelete}
          />
        </main>
      </PageWrapper>)
      : isNotFound ?
        <PageNotFound title="404 - PAGE NOT FOUND" content="The warehouse is not found." />
        : isLodaing ?
          <PageWrapper>
            <LoadingSpinner delay={5000} />
          </PageWrapper >
          : ""
  );
};

export default WarehouseDetailsPage;