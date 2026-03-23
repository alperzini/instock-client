import "./WarehouseForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import FormHeader from "../FormFields/FormHeader/FormHeader";
import FieldsetsWrapper from "../FormFields/FieldsetsWrapper/FieldsetsWrapper";
import FieldsetField from "../FormFields/FieldsetField/FieldsetField";
import FormButtonsWrapper from "../FormFields/FormButtonsWrapper/FormButtonsWrapper";
import FormCancelButton from "../customButtons/FormCancelButton/FormCancelButton";
import FormAddButton from "../customButtons/FormAddButton/FormAddButton";
import TextField from "../FormFields/TextField/TextField";
import { useNavigate } from "react-router-dom";

function WarehouseForm(props) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PORT = import.meta.env.VITE_PORT || "";
  const navigate = useNavigate();
  const { setWarehouses, formTitle, formType, warehouseId,
    initalName, initalAdress, initalCity, initalCountry,
    initalContactName, initalContactPosition, initalContactPhone, initalContactEmail } = props;

  // Set initial form data
  const [formData, setFormData] = useState({
    warehouse_name: initalName ?? "",
    address: initalAdress ?? "",
    city: initalCity ?? "",
    country: initalCountry ?? "",
    contact_name: initalContactName ?? "",
    contact_position: initalContactPosition ?? "",
    contact_phone: initalContactPhone ?? "",
    contact_email: initalContactEmail ?? ""
  });

  // const [errors, setErrors] = useState({});

  // Set initial fields user interaction 
  const [touched, setTouched] = useState({
    warehouse_name: false,
    address: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false
  });

  // Errors for each field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+1|1?)?\s?(\(\d{3}\)|\d{3})[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?(\(\d{4}\)|\d{4})$/;
  const errors = {
    warehouse_name: formData.warehouse_name.trim().length === 0 ? 'Please enter the warehouse name.' : '',
    address: formData.address.trim().length === 0 ? 'Please enter the warehouse address.' : '',
    city: formData.city.trim().length === 0 ? 'Please enter the warehouse city.' : '',
    country: formData.country.trim().length === 0 ? 'Please enter the warehouse country.' : '',
    contact_name: formData.contact_name.trim().length === 0 ? 'Please enter the warehouse contact name.' : '',
    contact_position: formData.contact_position.trim().length === 0 ? 'Please enter the warehouse contact position.' : '',
    contact_phone: formData.contact_phone.trim().length === 0 ? 'Please enter the warehouse contact phone number.'
      : (!phoneRegex.test(formData.contact_phone.trim()) ? 'Please enter a valid warehouse contact phone number.' : ''),
    contact_email: formData.contact_email.trim().length === 0 ? 'Please enter the warehouse contact email.'
      : (!emailRegex.test(formData.contact_email.trim()) ? 'Please enter a valid warehouse contact email.' : '')
  };
  // const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Load existing warehouse (edit mode)
  // useEffect(() => {
  //   if (formType !== "edit") return;

  //   const fetchWarehouse = async () => {
  //     try {
  //       const res = await axios.get(`${BACKEND_URL}${PORT}/warehouses/${warehouseId}`);
  //       setFormData(res.data);
  //     } catch (error) {
  //       console.error("Error loading warehouse:", error);
  //     }
  //   };

  //   fetchWarehouse();
  // }, [formType, warehouseId]);

  // Handle Change
  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleBlur = (e) => {
  //   setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  // };

  // Validation
  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.warehouse_name.trim())
  //     newErrors.warehouse_name = "Warehouse name is required";

  //   if (!formData.address.trim())
  //     newErrors.address = "Street address is required";

  //   if (!formData.city.trim())
  //     newErrors.city = "City is required";

  //   if (!formData.country.trim())
  //     newErrors.country = "Country is required";

  //   if (!formData.contact_name.trim())
  //     newErrors.contact_name = "Contact name is required";

  //   if (!formData.contact_position.trim())
  //     newErrors.contact_position = "Position is required";

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.contact_email))
  //     newErrors.contact_email = "Please enter a valid email address";

  //   // Phone validation
  //   const cleanPhone = formData.contact_phone.replace(/\D/g, "");
  //   const phoneRegex = /^(?:\+1|1?)?\s?(\(\d{3}\)|\d{3})[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?(\(\d{4}\)|\d{4})$/;
  //   if (cleanPhone.length < 10 || cleanPhone.length > 15)
  //     newErrors.contact_phone = "Please enter a valid phone number";
  //   else if (!phoneRegex.test(formData.contact_phone))
  //     newErrors.contact_phone = "Please enter a valid phone number";
  //   return newErrors;
  // };

  // // Live validation
  // useEffect(() => {
  //   setErrors(validateForm());
  // }, [formData]);

  // Is form valid?
  // const isFormValid = Object.keys(errors).length === 0;

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWarehouse = {
      warehouse_name: formData.warehouse_name.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      country: formData.country.trim(),
      contact_name: formData.contact_name.trim(),
      contact_position: formData.contact_position.trim(),
      contact_phone: formData.contact_phone.trim(),
      contact_email: formData.contact_email.trim()
    };
    if (formType === "add") { // post request
      try {
        const res = await axios.post(`${BACKEND_URL}${PORT}/warehouses`, newWarehouse);
        console.log("DB response:", res.data.data);
        // Update local state
        setWarehouses((prev) => [...prev, res.data.data]);
        // Navigate to warehouse details page
        navigate(`/warehouse/${res.data.data.id}`);
      }
      catch (error) {
        console.error("Error adding new warehouse:", error);
      }
    }
    else { // patch request
      try {
        const res = await axios.patch(`${BACKEND_URL}${PORT}/warehouses/${warehouseId}`, newWarehouse);
        console.log("DB response:", res.data.data);
        // Update local state
        setWarehouses((prev) => prev.map(w => w.id === warehouseId ? res.data.data : w));
        // Navigate to warehouse details page
        navigate(`/warehouse/${res.data.data.id}`);
      }
      catch (error) {
        console.error("Error updating warehouse:", error);
      }
    }
  };

  return (
    <>
      <FormHeader title={formTitle} />

      <form onSubmit={handleSubmit}>
        <FieldsetsWrapper>

          {/* Warehouse Details */}
          <FieldsetField title="Warehouse Details" isSecond={false}>
            <TextField
              label="Warehouse Name"
              name="warehouse_name"
              id="warehouse_name"
              type="text"
              placeholder="Warehouse Name"
              value={formData.warehouse_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.warehouse_name}
              isError={touched.warehouse_name && errors.warehouse_name}
            />

            <TextField
              label="Street Address"
              name="address"
              id="address"
              type="text"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.address}
              isError={touched.address && errors.address}
            />

            <TextField
              label="City"
              name="city"
              id="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city}
              isError={touched.city && errors.city}
            />

            <TextField
              label="Country"
              name="country"
              id="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country}
              isError={touched.country && errors.country}
            />
          </FieldsetField>

          {/* Contact Details */}
          <FieldsetField title="Contact Details" isSecond={true}>
            <TextField
              label="Contact Name"
              name="contact_name"
              id="contact_name"
              type="text"
              placeholder="Contact Name"
              value={formData.contact_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.contact_name}
              isError={touched.contact_name && errors.contact_name}
            />

            <TextField
              label="Position"
              name="contact_position"
              id="contact_position"
              type="text"
              placeholder="Position"
              value={formData.contact_position}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.contact_position}
              isError={touched.contact_position && errors.contact_position}
            />

            <TextField
              label="Phone Number"
              name="contact_phone"
              id="contact_phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.contact_phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.contact_phone}
              isError={touched.contact_phone && errors.contact_phone}
            />

            <TextField
              label="Email"
              name="contact_email"
              id="contact_email"
              type="email"
              placeholder="Email"
              value={formData.contact_email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.contact_email}
              isError={touched.contact_email && errors.contact_email}
            />
          </FieldsetField>

        </FieldsetsWrapper>

        <FormButtonsWrapper>
          <FormCancelButton />
          <FormAddButton
            label={formType === "add" ? "+ Add Warehouse" : "Save"}
            isDisabled={!isFormValid}
          />
        </FormButtonsWrapper>
      </form>
    </>
  );
}

export default WarehouseForm;