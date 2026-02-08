import "./TextField.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

function TextField(props) {
    const { label, name, id, placeholder, value, onChange, error, isError } = props;

    return (
        <div className="text-field__wrapper">
            <label className="text-field__label" htmlFor={id}>{label}</label>
            <input className={`text-field__text-input ${isError ? "text-field__text-input--error-border" : ""}`} 
            type="text" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            <ErrorMessage error={error} isError={isError} />
        </div>
    );
}
export default TextField;