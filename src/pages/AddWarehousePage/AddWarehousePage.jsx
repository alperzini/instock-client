import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import "./AddWarehousePage.scss";

const AddWarehousePage = ({ setWarehouses }) => {
  return (
    <PageWrapper className="add-warehouse">
      <WarehouseForm
        setWarehouses={setWarehouses}
        formTitle="Add New Warehouse"
        formType="add"
      />
    </PageWrapper>
  );
};

export default AddWarehousePage;