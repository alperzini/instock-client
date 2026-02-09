import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const WarehousesPage = ({ warehouses, setWarehouses }) => {

console.log("WarehousesPage");

return (
    <main className="warehouses-page">
        <WarehouseList warehouses={warehouses} />
    </main>
);

};

export default WarehousesPage;