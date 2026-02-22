import "./WarehousesPage.scss";
import { useEffect, useState } from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

const WarehousesPage = ({ warehouses, setWarehouses }) => {
  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    if (warehouses.length > 0)
      setIsLoading(false);
    else
      setTimeout(() => { setIsLoading(false); }, 5000);
  }, [warehouses]);

  return (

    isLodaing ?
      <PageWrapper>
        <LoadingSpinner delay={5000} />
      </PageWrapper >
      : (warehouses.length > 0) ?
        <PageWrapper>
          <main className="warehouses-page">
            <WarehouseList warehouses={warehouses} setWarehouses={setWarehouses} />
          </main>
        </PageWrapper>
        : <PageNotFound title="500 - INTERNAL SERVER ERROR" content="The warehouses list could not be fetched." />
  );
};

export default WarehousesPage;
