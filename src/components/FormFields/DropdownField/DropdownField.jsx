import "./DropdownField.scss";
import selectArrow from "../../../assets/icons/arrow_drop_down-24px.svg";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

function DropdownField(props) {
    const { label, name, id, placeholder, options, selectedValue, onChange, error, isError } = props;

    return (
        <div className="dropdown-field__wrapper">
            <label className="dropdown-field__label" htmlFor={id}>{label}</label>
            <select className={`dropdown-field__dropdown-input ${isError ? "dropdown-field__dropdown-input--error-border" : ""}`}
                id={id} name={name} value={selectedValue} onChange={onChange} required >
                <option className="dropdown-field__placeholdder-option" value="" disabled hidden>{placeholder}</option>
                {options.map((option) => (
                    <option key={option} className="dropdown-field__option" >
                        {option}
                    </option>
                ))}
            </select>
            <ErrorMessage error={error} isError={isError} />
        </div>
    );
}
export default DropdownField;