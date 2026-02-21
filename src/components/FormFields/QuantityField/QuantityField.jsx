import "./QuantityField.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

function QuantityField(props) {
    const { label, name, id, value, onChange, error, isError, onBlur } = props;

    return (
        <div className="quantity-field__wrapper">
            <label className="quantity-field__label" htmlFor={id}>{label}</label>
            <input className={`quantity-field__quantity-input ${isError ? "quantity-field__quantity-input--error-border" : ""}`}
                type="number" min={1} id={id} name={name} value={value} onChange={onChange} onBlur={onBlur} />
            <ErrorMessage error={error} isError={isError} />
        </div>
    );
}
export default QuantityField;