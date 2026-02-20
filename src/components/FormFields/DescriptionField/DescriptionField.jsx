import "./DescriptionField.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function DescriptionField(props) {
    const { label, name, id, placeholder, value, onChange, error, isError, onBlur } = props;

    return (
        <div className="desc-field__wrapper">
            <label className="desc-field__label" htmlFor={id}>{label}</label>
            <textarea className={`desc-field__desc-input ${isError ? "desc-field__desc-input--error-border" : ""}`}
            id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
            <ErrorMessage error={error} isError={isError} />
        </div>
    );
}
export default DescriptionField;