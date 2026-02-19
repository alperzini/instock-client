import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const InventoryPage = () => {
  return (
    <PageWrapper>
      <main className="inventory-page">
        <InventoryList />
      </main>
    </PageWrapper>
  );
};

export default InventoryPage;