import "./EditInventoryItemPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const EditInventoryItemPage = ({ inventory, setInventory, warehouses }) => {
    const { inventoryId } = useParams();
    const id = Number(inventoryId);
    const [inventoryItem, setInventoryItem] = useState(null);
    const [isLodaing, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isNaN(id)) // Check valid id in path
            setInventoryItem(inventory.find(item => item.id === id));
    }, [inventory]);

    useEffect(() => {
        if (inventoryItem != null) // Remove losding spinner if item is found
            setIsLoading(false);
        else
            setTimeout(() => { setIsLoading(false); }, 5000);
    }, [inventoryItem]);

    return (
        /* Check inventory item is found
        ** 404 if id is invalid
        ** Show edit page if inventory item is found
        ** Show loading page until inventory item is found or 404 otherwise */
        isNaN(id) ? <PageNotFound title="400 - BAD REQUEST" content="Invalid ID for the inventory item." />
            : (inventoryItem != null ?
                <PageWrapper>
                    <InventoryForm setInventory={setInventory} warehouses={warehouses}
                        formTitle={"Edit Inventory Item"} formType={"edit"} inventoryId={id}
                        initalName={inventoryItem.item_name} initalDesc={inventoryItem.description}
                        initalCategory={inventoryItem.category} initalStatus={inventoryItem.status}
                        initalQuantity={inventoryItem.quantity} initalWarehouse={inventoryItem.warehouse_id} />
                </PageWrapper>
                :
                isLodaing ?
                    <PageWrapper>
                        <LoadingSpinner delay={5000} />
                    </PageWrapper >
                    : <PageNotFound title="404 - PAGE NOT FOUND" content="The inventory item is not found." />

            )
    );
};

export default EditInventoryItemPage;