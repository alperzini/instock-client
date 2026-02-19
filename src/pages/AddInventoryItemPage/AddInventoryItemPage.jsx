import "./AddInventoryItemPage.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const AddInventoryItemPage = ({ inventory, setInventory }) => {

    return (
        <PageWrapper>
            <InventoryForm inventory={inventory} setInventory={setInventory}
                formTitle={"Add New Inventory Item"} formType={"add"} />
        </PageWrapper>
    );
};

export default AddInventoryItemPage;