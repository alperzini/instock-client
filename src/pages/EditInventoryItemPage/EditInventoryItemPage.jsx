import "./EditInventoryItemPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const EditInventoryItemPage = ({ inventory, setInventory, warehouses }) => {
    const params = useParams();
    const [inventoryItem, setInventoryItem] = useState(null);
    const [id, setId] = useState(Number(params.inventoryId));

    useEffect(() => {
        if (!isNaN(id)) // Check valid id in path
            setInventoryItem(inventory.find(item => item.id === id));
    }, [inventory]);

    return (
        // Check inventory item is found */}
        // 404 if id is invalid */}
        // Show edit page if inventory item is found */}
        // Show loading page until inventory item is found */}
        (isNaN(id)) ? <PageNotFound />
            : ((inventoryItem != null) ?
                <PageWrapper>
                    <InventoryForm setInventory={setInventory} warehouses={warehouses}
                        formTitle={"Edit Inventory Item"} formType={"edit"} inventoryId={id}
                        initalName={inventoryItem.item_name} initalDesc={inventoryItem.description}
                        initalCategory={inventoryItem.category} initalStatus={inventoryItem.status}
                        initalQuantity={inventoryItem.quantity} initalWarehouse={inventoryItem.warehouse_id} />
                </PageWrapper>
                : <PageWrapper>
                    <LoadingSpinner />
                </PageWrapper>)
    );
};

export default EditInventoryItemPage;