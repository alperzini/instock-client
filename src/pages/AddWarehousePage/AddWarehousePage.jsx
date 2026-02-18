import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/FormFields/TextField/TextField";
import Button from "../../components/Button/Button";
import FormHeader from "../../components/FormFields/FormHeader/FormHeader";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import "./AddWarehousePage.scss";

const AddWarehousePage = ({ setWarehouses }) => {
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PORT = import.meta.env.VITE_PORT;

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

  // ----------------------------
  // Handle Input Change
  // ----------------------------
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ----------------------------
  // Validation
  // ----------------------------
  const validateForm = () => {
    const newErrors = {};

    // Required fields
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

    // Phone validation (10–15 digits)
    const cleanPhone = formData.contact_phone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 15)
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

      const newWarehouse = {
        ...formData,
      };

      await axios.post(
        `${BACKEND_URL}${PORT}/warehouses`,
        newWarehouse
      );

      // Update local state
      setWarehouses((prev) => [...prev, newWarehouse]);

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
    <PageWrapper className="add-warehouse">
      <div className="add-warehouse__container">
        
        {/* Header */}
        <div className="add-warehouse__header">
          <FormHeader title="Add New Warehouse" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="add-warehouse__form-sections">

            {/* Warehouse Details */}
            <div className="add-warehouse__form-sections__warehouse-details">
              <h2 className="add-warehouse__form-sections__warehouse-details__title">
                Warehouse Details
              </h2>

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
            </div>

            {/* Contact Details */}
            <div className="add-warehouse__form-sections__contact-details">
              <h2 className="add-warehouse__form-sections__contact-details__title">
                Contact Details
              </h2>

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
            </div>
          </div>

          {/* Action Buttons */}
          <div className="add-warehouse__actions">
            <Button
              variant="secondary"
              type="button"
              onClick={() => navigate("/")}
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "+ Add Warehouse"}
            </Button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default AddWarehousePage;
