import "./WarehouseDetailsPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

    const WarehouseDetailsPage = ({ inventory, setInventory, warehouses = [] }) => {
    const { warehouseId } = useParams();
    const navigate = useNavigate();

    const warehouse = warehouses.find((w) => String(w.id) === String(warehouseId));

    return (
        <PageWrapper>
        <main className="warehouse-details-page">
            <WarehouseDetails
            warehouse={warehouse}
            onEdit={() => navigate(`/editWarehouse/${warehouseId}`)}
            />

            {/* Inventory list comes later */}
        </main>
        </PageWrapper>
    );
    };

export default WarehouseDetailsPage;
