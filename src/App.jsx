import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "./ScrollToTop.jsx";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.jsx";
import AddWareHousePage from "./pages/AddWarehousePage/AddWarehousePage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage.jsx";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage.jsx";
import AddInventoryItemPage from "./pages/AddInventoryItemPage/AddInventoryItemPage.jsx";

function App() {
  // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  // const PORT = import.meta.env.VITE_BACKEND_PORT || 8080;
  const [warehouses, setWarehouses] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchWarehousesInventory = async () => {
      try {
        // const initalWarehouses = await axios.get(`${BACKEND_URL}${PORT}/warehouses`);
        // const initalInventory = await axios.get(`${BACKEND_URL}${PORT}/inventory`);
        // setWarehouses(initalWarehouses.data);
        // setInventory(initalInventory.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWarehousesInventory();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Add Header here */}
      <Routes>
        <Route path="/" element={<WarehousesPage warehouses={warehouses} setWarehouses={setWarehouses} />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetailsPage inventory={inventory} setInventory={setInventory} />} />
        <Route path="/editWarehouse/:warehouseId" element={<EditWarehousePage warehouses={warehouses} setWarehouses={setWarehouses} />} />
        <Route path="/addWarehouse" element={<AddWareHousePage warehouses={warehouses} setWarehouses={setWarehouses} />} />
        <Route path="/inventory" element={<InventoryPage inventory={inventory} setInventory={setInventory} />} />
        <Route path="/inventory/:inventoryId" element={<InventoryItemDetailsPage inventory={inventory} />} />
        <Route path="/editInventory/:inventoryId" element={<EditInventoryItemPage inventory={inventory} setInventory={setInventory} />} />
        <Route path="/addInventory" element={<AddInventoryItemPage inventory={inventory} setInventory={setInventory} />} />
        <Route path="*" element={<h1>404<br />PAGE NOT FOUND</h1>} />
      </Routes>
      {/* Add Footer Here */}
    </BrowserRouter>
  )
}

export default App;
