import "./DropdownField.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

function DropdownField(props) {
    const { label, name, id, placeholder, options, selectedValue, onChange, error, isError, onBlur } = props;

    return (
        <div className="dropdown-field__wrapper">
            <label className="dropdown-field__label" htmlFor={id}>{label}</label>
            <select className={`dropdown-field__dropdown-input ${isError ? "dropdown-field__dropdown-input--error-border" : ""}`}
                id={id} name={name} value={selectedValue} onChange={onChange} onBlur={onBlur} required >
                <option className="dropdown-field__placeholdder-option" value="" disabled hidden>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id} className="dropdown-field__option" >
                        {option.label}
                    </option>
                ))}
            </select>
            <ErrorMessage error={error} isError={isError} />
        </div>
    );
}
export default DropdownField;