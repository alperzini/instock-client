import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import PageWrapper from "../../components/PageWrapper/PageWrapper"

const WarehousesPage = ({ warehouses, setWarehouses }) => {

return (
    <PageWrapper> 
    <main className="warehouses-page">
    <WarehouseList warehouses={warehouses} /> 
    </main>
    </PageWrapper> 


);

    
};


export default WarehousesPage;
