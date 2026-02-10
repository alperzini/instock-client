import "./WarehousesPage.scss";
import TextField from "../../components/formFields/TextField/TextField";
import StatusField from "../../components/formFields/StatusField/StatusField";
import SearchField from "../../components/formFields/SearchField/SearchField";
import DropdownField from "../../components/formFields/DropdownField/DropdownField";
import FieldsetField from "../../components/formFields/FieldsetField/FieldsetField";
import CancelButton from "../../components/customButtons/CancelButton/CancelButton";
import FormAddButton from "../../components/customButtons/FormAddButton/FormAddButton";
import DeleteButton from "../../components/customButtons/DeleteButton/DeleteButton";
import { useState } from "react";

const WarehousesPage = ({ warehouses, setWarehouses }) => {
    console.log("WarehousesPage");
    const [value, setValue] = useState("");
    const handleTextChange = (event) => {
        setValue(event.target.name.value);
    }
    const [selectedStatus, setSelectedStatus] = useState("In Stock");
    const handleRadioChange = (event) => {
        setSelectedStatus(event.target.value);
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
            <div style={{ padding: 30 }} >
                <FieldsetField title="Item Details" hasBorder={false} >
                    <TextField onChange={handleTextChange} type="email" label="Item Name" name="name" id="name" placeholder="Item Name" value={value} error="This field is required" />
                    <StatusField legend="Status" name="status" selectedStatus={selectedStatus} onChange={handleRadioChange} />
                    <SearchField onChange={handleSearchChange} name="search" id="search" placeholder="Search..." value={search} />
                    <DropdownField onChange={handleListChange} options={options} label="Fruit" name="fruit" id="fruit" placeholder="Please select" selectedValue={selectedFruit} isError={false} error="This field is required" />
                    <CancelButton />
                    <FormAddButton label="+ Add Item" isDisabled={false} />
                    <DeleteButton label="Delete" />
                </FieldsetField>
            </div>
        </>
    );
};

export default WarehousesPage;