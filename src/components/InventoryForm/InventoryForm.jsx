import "./InventoryForm.scss";
import { useState, useEffect } from "react";
import FormHeader from "../formFields/FormHeader/FormHeader";
import FieldsetsWrapper from "../formFields/FieldsetsWrapper/FieldsetsWrapper";
import FieldsetField from "../formFields/FieldsetField/FieldsetField";
import FormButtonsWrapper from "../formFields/FormButtonsWrapper/FormButtonsWrapper";
import FormCancelButton from "../customButtons/FormCancelButton/FormCancelButton";
import FormAddButton from "../customButtons/FormAddButton/FormAddButton";
import TextField from "../formFields/TextField/TextField";

function InventoryForm(props) {
    const { inventory, setInventory, formTitle, formType,
        initalName, initalDesc, initalCategory, initalStatus,
        initalQuantity, initalWarehouse } = props;

    // Set initial form data
    const [formData, setFormData] = useState({
        name: initalName ?? '', desc: initalDesc ?? '',
        category: initalCategory ?? '', status: initalStatus ?? "In Stock",
        quantity: initalQuantity ?? 1, warehouse: initalWarehouse ?? ''
    });

    // Set initial fields user interaction 
    const [touched, setTouched] = useState({
        name: false, desc: false, category: false,
        status: false, quantity: false, warehouse: false
    });

    // Errors for each field
    const errors = {
        name: formData.name.trim().length === 0 ? 'Please enter the item name.' : '',
        des: formData.desc.trim().length === 0 ? 'Please enter the item description.' : '',
        category: formData.category.length === 0 ? 'Please choose the item category.' : '',
        warehouse: formData.warehouse.length === 0 ? 'Please choose the item warehouse.' : '',
    };

    // Form is valid if there are no errors
    const isFormValid = Object.values(errors).every(error => error.length === 0);

    // Handle onChange and onBlur of each field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                    </FieldsetField>
                    <FieldsetField title="Item Availability" isSecond={true}>

                    </FieldsetField>
                </FieldsetsWrapper>
                <FormButtonsWrapper>
                    <FormCancelButton />
                    <FormAddButton label="+ Add Item" isDisabled={!isFormValid} />
                </FormButtonsWrapper>
            </form>
        </>
    );
}
export default InventoryForm;