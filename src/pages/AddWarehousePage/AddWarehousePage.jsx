import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/FormFields/TextField/TextField";
import Button from "../../components/Button/Button";
import FormHeader from "../../components/FormFields/FormHeader/FormHeader"
import "./AddWarehousePage.scss";

const AddWarehousePage = ({ setWarehouses }) => {
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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.warehouse_name) {
      newErrors.warehouse_name = "Warehouse name is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Submitting:", formData);
  };

  return (
    <main className="add-warehouse">
      <div className="add-warehouse__container">

        {/* Header */}
        <div className="add-warehouse__header">
          <FormHeader title="Add New Warehouse"/>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="add-warehouse__form-sections">

            {/* Warehouse Details */}
            <div className="add-warehouse__form-sections__warehouse-details">
              <h2 className="add-warehouse__form-sections__warehouse-details__title">
                Warehouse Details
              </h2>

              <TextField
                className="add-warehouse__form-sections__input"
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
                className="add-warehouse__form-sections__input"
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
                className="add-warehouse__form-sections__input"
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
                className="add-warehouse__form-sections__input"
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
                className="add-warehouse__form-sections__input"
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
            <Button className="add-warehouse__actions__secondary" variant="secondary" type="button" onClick={() => navigate("/")}> Cancel </Button>
            <Button className="add-warehouse__actions__primary" variant="primary" type="submit"> + Add Warehouse </Button>
          </div>

        </form>
      </div>
    </main>
  );
};

export default AddWarehousePage;
