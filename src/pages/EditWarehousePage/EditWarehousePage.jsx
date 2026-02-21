import { useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import "./EditWarehousePage.scss";

const EditWarehousePage = ({ setWarehouses }) => {
  const { warehouseId } = useParams();

  return (
    <PageWrapper className="edit-warehouse">
      <WarehouseForm
        setWarehouses={setWarehouses}
        formTitle="Edit Warehouse"
        formType="edit"
        warehouseId={Number(warehouseId)}
      />
    </PageWrapper>
  );
};

export default EditWarehousePage;