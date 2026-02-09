import "./WarehousesPage.scss";
import TextField from "../../components/FormFields/TextField/TextField";
import StatusField from "../../components/FormFields/StatusField/StatusField";
import SearchField from "../../components/FormFields/SearchField/SearchField";
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
    return (
        <>
            <TextField onChange={handleTextChange} type="email" label="Item Name" name="name" id="name" placeholder="Item Name" value={value} error="This field is required" isError={false} />
            <StatusField legend="Status" name="status" selectedStatus={selectedStatus} onChange={handleRadioChange} />
            <SearchField onChange={handleSearchChange} name="search" id="search" placeholder="Search..." value={search} />
        </>
    );
};

export default WarehousesPage;