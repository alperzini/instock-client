import "./WarehousesPage.scss";
import DescriptionField from "../../components/formFields/DescriptionField/DescriptionField";
import QuantityField from "../../components/formFields/QuantityField/QuantityField";
import TextField from "../../components/formFields/TextField/TextField";
import StatusField from "../../components/formFields/StatusField/StatusField";
import SearchField from "../../components/formFields/SearchField/SearchField";
import DropdownField from "../../components/formFields/DropdownField/DropdownField";
import FieldsetField from "../../components/formFields/FieldsetField/FieldsetField";
import FormCancelButton from "../../components/customButtons/FormCancelButton/FormCancelButton";
import FormAddButton from "../../components/customButtons/FormAddButton/FormAddButton";
import DeleteButton from "../../components/customButtons/DeleteButton/DeleteButton";
import FormButtonsWrapper from "../../components/formFields/FormButtonsWrapper/FormButtonsWrapper";
import FormHeader from "../../components/formFields/FormHeader/FormHeader";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import BackArrowButton from "../../components/customButtons/BackArrowButton/BackArrowButton";
import FieldsetsWrapper from "../../components/formFields/FieldsetsWrapper/FieldsetsWrapper";
import { useState } from "react";

const WarehousesPage = ({ warehouses, setWarehouses }) => {
    console.log("WarehousesPage");
    const [desc, setDesc] = useState("");
    const handleDescChange = (event) => {
        setDesc(event.target.name.value);
    }

    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.name.value);
    }

    const [selectedStatus, setSelectedStatus] = useState("In Stock");
    const handleRadioChange = (event) => {
        setSelectedStatus(event.target.value);
    }

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const [search, setSearch] = useState("");
    const handleSearchChange = (event) => {
        setSearch(event.target.name.value);
    }

    const [selectedFruit, setSelectedFruit] = useState('');
    const options = ['Apple', 'Banana', 'Cranberry'];
    const handleListChange = (event) => {
        setSelectedFruit(event.target.value);
    };
    return (
        <>
            <div style={{ height: "60px" }}></div>
            <PageWrapper>
                <FormHeader title={"Add New Inventory Item"} />
                <FieldsetsWrapper>
                    <FieldsetField title="Item Details" isSecond={false} >
                        <DescriptionField onChange={handleDescChange} label="Description" name="description" id="description" placeholder="Please enter a brief item description..." value={desc} error="This field is required" isError={false} />
                        <TextField onChange={handleNameChange} type="text" label="Item Name" name="name" id="name" placeholder="Item Name" value={name} error="This field is required" isError={false} />
                        <StatusField legend="Status" name="status" selectedStatus={selectedStatus} onChange={handleRadioChange} />
                        <QuantityField onChange={handleQuantityChange} label="Quantity" name="quantity" id="quantity" value={quantity} />
                        <DropdownField onChange={handleListChange} options={options} label="Fruit" name="fruit" id="fruit" placeholder="Please select" selectedValue={selectedFruit} isError={true} error="This field is required" />
                    </FieldsetField>
                    <FieldsetField title="Item Details" isSecond={true} >
                        <DescriptionField onChange={handleDescChange} label="Description" name="description" id="description" placeholder="Please enter a brief item description..." value={desc} error="This field is required" isError={false} />
                        <TextField onChange={handleNameChange} type="text" label="Item Name" name="name" id="name" placeholder="Item Name" value={name} error="This field is required" isError={true} />
                        <StatusField legend="Status" name="status" selectedStatus={selectedStatus} onChange={handleRadioChange} />
                        <QuantityField onChange={handleQuantityChange} label="Quantity" name="quantity" id="quantity" value={quantity} />
                        <DropdownField onChange={handleListChange} options={options} label="Fruit" name="fruit" id="fruit" placeholder="Please select" selectedValue={selectedFruit} isError={false} error="This field is required" />
                        <SearchField onChange={handleSearchChange} name="search" id="search" placeholder="Search..." value={search} />
                        <BackArrowButton />
                        <DeleteButton label="Delete" />
                    </FieldsetField>
                </FieldsetsWrapper>
                <FormButtonsWrapper>
                    <FormCancelButton />
                    <FormAddButton label="+ Add Item" isDisabled={true} />
                </FormButtonsWrapper>
            </PageWrapper>
        </>
    );
};

export default WarehousesPage;