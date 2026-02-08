import "./WarehousesPage.scss";
import TextField from "../../components/FormFields/TextField/TextField";
import QuantityField from "../../components/FormFields/QuantityField/QuantityField";
import StatusField from "../../components/FormFields/StatusField/StatusField";
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
    return (
        <>
            <TextField onChange={handleTextChange} type="email" label="Item Name" name="name" id="name" placeholder="Item Name" value={value} error="This field is required" isError={true} />
            <QuantityField onChange={handleTextChange} label="Item Name" name="name" id="name" placeholder="Item Name" value={value} error="This field is required" isError={true} />
            <QuantityField onChange={handleTextChange} label="Item Name" name="name" id="name" placeholder="Item Name" value={value} error="This field is required" isError={true} />
            <StatusField legend="Status" name="status" selectedStatus={selectedStatus} onChange={handleRadioChange} />
        </>
    );
};

export default WarehousesPage;