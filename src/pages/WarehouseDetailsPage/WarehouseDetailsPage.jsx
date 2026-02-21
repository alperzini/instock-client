import { useState, useEffect } from "react";
import axios from "axios";
import "./WarehouseDetailsPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";


    const WarehouseDetailsPage = ({ inventory, setInventory, warehouses = [] }) => {
    const { warehouseId } = useParams();
    const navigate = useNavigate();

    const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/warehouses/${warehouseId}`);
        setWarehouse(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWarehouse();
  }, [warehouseId]);

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
