import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const WarehousesPage = ({ warehouses, setWarehouses }) => {
  return (
    <PageWrapper>
      <main className="warehouses-page">
        <WarehouseList warehouses={warehouses} setWarehouses={setWarehouses} />
      </main>
    </PageWrapper>
  );
};

export default WarehousesPage;
