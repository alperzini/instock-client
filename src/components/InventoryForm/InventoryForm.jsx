import "./InventoryForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import FormHeader from "../FormFields/FormHeader/FormHeader";
import FieldsetsWrapper from "../FormFields/FieldsetsWrapper/FieldsetsWrapper";
import FieldsetField from "../FormFields/FieldsetField/FieldsetField";
import FormButtonsWrapper from "../FormFields/FormButtonsWrapper/FormButtonsWrapper";
import FormCancelButton from "../customButtons/FormCancelButton/FormCancelButton";
import FormAddButton from "../customButtons/FormAddButton/FormAddButton";
import TextField from "../FormFields/TextField/TextField";
import DescriptionField from "../FormFields/DescriptionField/DescriptionField";
import DropdownField from "../FormFields/DropdownField/DropdownField";
import StatusField from "../FormFields/StatusField/StatusField";
import QuantityField from "../FormFields/QuantityField/QuantityField";
import { useNavigate } from 'react-router-dom';

function InventoryForm(props) {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const PORT = import.meta.env.VITE_PORT || "";
    const navigate = useNavigate();
    const { setInventory, warehouses, formTitle, formType, inventoryId,
        initalName, initalDesc, initalCategory, initalStatus,
        initalQuantity, initalWarehouse } = props;

    // Handle initial quantity of 0
    let q = 0;
    if (initalQuantity === 0)
        q = 1;
    else
        q = initalQuantity;

    // Set initial form data
    const [formData, setFormData] = useState({
        name: initalName ?? '', desc: initalDesc ?? '',
        category: initalCategory ?? '', status: initalStatus ?? "In Stock",
        quantity: q ?? 1, warehouse: initalWarehouse ?? ''
    });
    const [categoriesList, setCategoriesList] = useState([]);

    //Populate categories dropdown list
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesRes = await axios.get(`${BACKEND_URL}${PORT}/categories`);
                setCategoriesList(categoriesRes.data);
            } catch (error) {
                console.error("Error fetching inventory categories:", error);
            }
        };
        fetchData();
    }, []);

    // Set initial fields user interaction 
    const [touched, setTouched] = useState({
        name: false, desc: false, category: false, quantity: false, warehouse: false
    });

    // Errors for each field
    const errors = {
        name: formData.name.trim().length === 0 ? 'Please enter the item name.' : '',
        desc: formData.desc.trim().length === 0 ? 'Please enter the item description.' : '',
        category: formData.category.length === 0 ? 'Please choose the item category.' : '',
        quantity: formData.quantity.length === 0 ? 'Please enter the item quantity.' : '',
        warehouse: formData.warehouse.length === 0 ? 'Please choose the item warehouse.' : '',
    };

    // Form is valid if there are no errors
    const isFormValid = Object.values(errors).every(error => error.length === 0);

    // Handle onChange and onBlur of each field
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "status" && value === "Out of Stock") // Handle case of empty quantity field then toggle to Out of stock
            setFormData(prev => ({ ...prev, [name]: value, ["quantity"]: 1 }));
        else
            setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedQuantity = (formData.status === "Out of Stock") ? 0 : formData.quantity;
        const newInventory = {
            warehouse_id: Number(formData.warehouse), item_name: formData.name.trim(),
            description: formData.desc.trim(), category: formData.category,
            status: formData.status, quantity: updatedQuantity
        };
        if (formType === "add") { // post request
            try {
                const res = await axios.post(`${BACKEND_URL}${PORT}/inventories`, newInventory);
                console.log("DB response:", res.data.data);
                // Update local state
                setInventory((prev) => [...prev, res.data.data]);
                // Navigate to inventory item details page
                navigate(`/inventory/${res.data.data.id}`);
            }
            catch (error) {
                console.error("Error adding new inventory item:", error);
            }
        }
        else { // patch request
            try {
                const res = await axios.patch(`${BACKEND_URL}${PORT}/inventories/${inventoryId}`, newInventory);
                console.log("DB response:", res.data.data);
                // Update local state
                setInventory((prev) => prev.map(item =>
                    item.id === inventoryId ? res.data.data : item
                ));
                // Navigate to inventory item details page
                navigate(`/inventory/${res.data.data.id}`);
            }
            catch (error) {
                console.error("Error updating inventory item:", error);
            }
        }
    };

    return (
        <>
            <FormHeader title={formTitle} />
            <form onSubmit={handleSubmit}>
                <FieldsetsWrapper>
                    <FieldsetField title="Item Details" isSecond={false}>
                        <TextField onChange={handleChange} onBlur={handleBlur} type="text" label="Item Name"
                            name="name" id="name" placeholder="Item Name" value={formData.name}
                            error={errors.name} isError={touched.name && errors.name} />
                        <DescriptionField onChange={handleChange} onBlur={handleBlur} label="Description"
                            name="desc" id="desc" placeholder="Please enter a brief item description..." value={formData.desc}
                            error={errors.desc} isError={touched.desc && errors.desc} />
                        <DropdownField onChange={handleChange} onBlur={handleBlur} label="Category"
                            options={categoriesList.map(c => ({ id: c, label: c }))}
                            name="category" id="category" placeholder="Please select" selectedValue={formData.category}
                            error={errors.category} isError={touched.category && errors.category} />
                    </FieldsetField>
                    <FieldsetField title="Item Availability" isSecond={true}>
                        <StatusField legend="Status" name="status" selectedStatus={formData.status} onChange={handleChange} />
                        {(formData.status === "In Stock") ?
                            <QuantityField label="Quantity" name="quantity" id="quantity"
                                value={formData.quantity} onChange={handleChange} onBlur={handleBlur}
                                error={errors.quantity} isError={touched.quantity && errors.quantity} />
                            : ""}
                        <DropdownField onChange={handleChange} onBlur={handleBlur} label="Warehouse"
                            options={warehouses.map(warehouse => ({ id: warehouse.id, label: warehouse.warehouse_name }))}
                            name="warehouse" id="warehouse" placeholder="Please select" selectedValue={formData.warehouse}
                            error={errors.warehouse} isError={touched.warehouse && errors.warehouse} />
                    </FieldsetField>
                </FieldsetsWrapper>
                <FormButtonsWrapper>
                    <FormCancelButton />
                    <FormAddButton label={(formType==="add") ? "+ Add Item" : "Save"} isDisabled={!isFormValid} />
                </FormButtonsWrapper>
            </form>
        </>
    );
}
export default InventoryForm;