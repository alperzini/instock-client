import "./WarehousesPage.scss";
import TextField from "../../components/FormFields/TextField/TextField";
import StatusField from "../../components/FormFields/StatusField/StatusField";
import SearchField from "../../components/FormFields/SearchField/SearchField";
import DropdownField from "../../components/FormFields/DropdownField/DropdownField";
import FieldsetField from "../../components/FormFields/FieldsetField/FieldsetField";
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
                </FieldsetField>
            </div>
        </>
    );
};

export default WarehousesPage;