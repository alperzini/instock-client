import "./WarehousesPage.scss";
import TextField from "../../components/FormFields/TextField/TextField";
import { useState } from "react";

const WarehousesPage = ({ warehouses, setWarehouses }) => {
    console.log("WarehousesPage");
    const [value, setValue] = useState("");
    const handleTextChange = (event) => {
        setValue(event.target.name.value);
    }
    return (
        <TextField onChange={handleTextChange} label="Item Name" name="name" id="name" placeholder="Item Name" value={value} error="This field is required" isError={true} />
    );
};

export default WarehousesPage;