import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import "./AddWarehousePage.scss";

const AddWarehousePage = ({ setWarehouses }) => {
  return (
    <PageWrapper>
      <WarehouseForm
        setWarehouses={setWarehouses}
        formTitle="Add New Warehouse"
        formType="add"
      />
    </PageWrapper>
  );
};

export default AddWarehousePage;