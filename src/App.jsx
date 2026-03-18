import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "./ScrollToTop.jsx";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.jsx";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage.jsx";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage.jsx";
import AddInventoryItemPage from "./pages/AddInventoryItemPage/AddInventoryItemPage.jsx";
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

function App() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

  const [warehouses, setWarehouses] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const warehousesRes = await axios.get(`${BACKEND_URL}/warehouses`);
        setWarehouses(warehousesRes.data);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }

      try {
        const inventoryRes = await axios.get(`${BACKEND_URL}/inventories`);
        setInventory(inventoryRes.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<WarehousesPage warehouses={warehouses} setWarehouses={setWarehouses} />} />
        <Route path="/warehouse/:warehouseId" element={<WarehouseDetailsPage inventory={inventory} setInventory={setInventory} warehouses={warehouses} />} />
        <Route path="/editWarehouse/:warehouseId" element={<EditWarehousePage warehouses={warehouses} setWarehouses={setWarehouses} />} />
        <Route path="/addWarehouse" element={<AddWarehousePage warehouses={warehouses} setWarehouses={setWarehouses} />} />
        <Route path="/inventory" element={<InventoryPage inventory={inventory} setInventory={setInventory} />} />
        <Route path="/inventory/:inventoryId" element={<InventoryItemDetailsPage inventory={inventory} />} />
        <Route path="/editInventory/:inventoryId" element={<EditInventoryItemPage inventory={inventory} setInventory={setInventory} warehouses={warehouses} />} />
        <Route path="/addInventory" element={<AddInventoryItemPage inventory={inventory} setInventory={setInventory} warehouses={warehouses} />} />
        <Route path="*" element={<PageNotFound title="404 - PAGE NOT FOUND"
          content="The content you are looking for cannot be found." />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;