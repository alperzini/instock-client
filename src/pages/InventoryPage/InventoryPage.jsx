import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";

const InventoryPage = () => {
  return (
      <main className="inventory-page">
        <InventoryList />
      </main>
  );
};

export default InventoryPage;