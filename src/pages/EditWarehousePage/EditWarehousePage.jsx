import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./EditWarehousePage.scss";

const EditWarehousePage = ({ setWarehouses, warehouses }) => {
  const { warehouseId } = useParams();
  const id = Number(warehouseId);
  const [warehouse, setWarehouse] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isNaN(id)) // Check valid id in path
      setWarehouse(warehouses.find(w => w.id === id));
  }, [warehouses]);

  useEffect(() => {
    if (warehouse != null) // Remove losding spinner if item is found
      setIsLoading(false);
    else
      setTimeout(() => { setIsLoading(false); }, 5000);
  }, [warehouse]);

  return (
    /* Check warehouse is found
    ** 404 if id is invalid
    ** Show edit page if warehouse is found
    ** Show loading page until warehouse is found or 404 otherwise */
    isNaN(id) ? <PageNotFound content="Invalid ID for the warehouse." />
      : (warehouse != null ?
        <PageWrapper>
          <WarehouseForm warehouses={warehouses} setWarehouses={setWarehouses}
            formTitle="Edit Warehouse" formType="edit" warehouseId={id}
            initalName={warehouse.warehouse_name} initalAdress={warehouse.address}
            initalCity={warehouse.city} initalCountry={warehouse.country}
            initalContactName={warehouse.contact_name} initalContactPosition={warehouse.contact_position}
            initalContactPhone={warehouse.contact_phone} initalContactEmail={warehouse.contact_email} />
        </PageWrapper>
        :
        (isLodaing ?
          <PageWrapper>
            <LoadingSpinner delay={5000} />
          </PageWrapper >
          : <PageNotFound content="The warehouse is not found." />
        )
      )
  );
};

export default EditWarehousePage;