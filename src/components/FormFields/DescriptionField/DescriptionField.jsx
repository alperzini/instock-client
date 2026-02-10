import "./DescriptionField.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessagejsx";

function DescriptionField(props) {
    const { label, name, id, placeholder, value, onChange, error, isError } = props;

    return (
        <div className="desc-field__wrapper">
            <label className="desc-field__label" htmlFor={id}>{label}</label>
            <textarea className={`desc-field__desc-input ${isError ? "desc-field__desc-input--error-border" : ""}`}
            id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            <ErrorMessage error={error} isError={isError} />
        </div>
    );
}
export default DescriptionField;