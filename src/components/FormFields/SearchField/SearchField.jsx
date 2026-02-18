import "./SearchField.scss";
import searchIcon from "../../../assets/icons/search-24px.svg";

function SearchField(props) {
    const { name, id, placeholder, value, onChange } = props;

    return (
        <div className="search-field__wrapper">
            <input className="search-field__search-input"
                type="search" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            <img className="search-field__icon" src={searchIcon} alt="Search icon represented by a magnifying glass." />
        </div>
    );
}
export default SearchField;