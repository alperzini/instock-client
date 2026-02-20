import "./WarehouseForm.scss";
import { useState } from "react";
import axios from "axios";
import FormHeader from "../FormFields/FormHeader/FormHeader";
import FieldsetsWrapper from "../FormFields/FieldsetsWrapper/FieldsetsWrapper";
import FieldsetField from "../FormFields/FieldsetField/FieldsetField";
import FormButtonsWrapper from "../FormFields/FormButtonsWrapper/FormButtonsWrapper";
import FormCancelButton from "../customButtons/FormCancelButton/FormCancelButton";
import FormAddButton from "../customButtons/FormAddButton/FormAddButton";
import TextField from "../FormFields/TextField/TextField";
import { useNavigate } from "react-router-dom";

function WarehouseForm({ formTitle, formType, setWarehouses }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PORT = import.meta.env.VITE_PORT;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.warehouse_name.trim())
      newErrors.warehouse_name = "Warehouse name is required";

    if (!formData.address.trim())
      newErrors.address = "Street address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.country.trim())
      newErrors.country = "Country is required";

    if (!formData.contact_name.trim())
      newErrors.contact_name = "Contact name is required";

    if (!formData.contact_position.trim())
      newErrors.contact_position = "Position is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contact_email))
      newErrors.contact_email = "Please enter a valid email address";

    // Phone validation
    const cleanPhone = formData.contact_phone.replace(/\D/g, "");
    const phoneRegex = /^(?:\+1|1?)?\s?(\(\d{3}\)|\d{3})[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?(\(\d{4}\)|\d{4})$/;
    if (cleanPhone.length < 10 || cleanPhone.length > 15)
      newErrors.contact_phone = "Please enter a valid phone number";
    else if (!phoneRegex.test(formData.contact_phone))
        newErrors.contact_phone = "Please enter a valid phone number";
    return newErrors;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setIsSubmitting(true);

      const newWarehouse = { ...formData };

      const response = await axios.post(
        `${BACKEND_URL}${PORT}/warehouses`,
        newWarehouse
      );

      // Update global state
      setWarehouses((prev) => [...prev, response.data.data]);

      navigate("/");
    } catch (error) {
      console.error("Error creating warehouse:", error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to create warehouse.");
      }
    } finally {
      setIsSubmitting(false);
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
              error={errors.warehouse_name}
              isError={!!errors.warehouse_name}
            />

            <TextField
              label="Street Address"
              name="address"
              id="address"
              type="text"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
              isError={!!errors.address}
            />

            <TextField
              label="City"
              name="city"
              id="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
              isError={!!errors.city}
            />

            <TextField
              label="Country"
              name="country"
              id="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              error={errors.country}
              isError={!!errors.country}
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
              error={errors.contact_name}
              isError={!!errors.contact_name}
            />

            <TextField
              label="Position"
              name="contact_position"
              id="contact_position"
              type="text"
              placeholder="Position"
              value={formData.contact_position}
              onChange={handleChange}
              error={errors.contact_position}
              isError={!!errors.contact_position}
            />

            <TextField
              label="Phone Number"
              name="contact_phone"
              id="contact_phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.contact_phone}
              onChange={handleChange}
              error={errors.contact_phone}
              isError={!!errors.contact_phone}
            />

            <TextField
              label="Email"
              name="contact_email"
              id="contact_email"
              type="email"
              placeholder="Email"
              value={formData.contact_email}
              onChange={handleChange}
              error={errors.contact_email}
              isError={!!errors.contact_email}
            />
          </FieldsetField>

        </FieldsetsWrapper>

        <FormButtonsWrapper>
          <FormCancelButton onClick={() => navigate("/")} />
          <FormAddButton label="+ Add Warehouse" isDisabled={isSubmitting} />
        </FormButtonsWrapper>
      </form>
    </>
  );
}

export default WarehouseForm;