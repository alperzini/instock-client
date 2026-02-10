import "./SearchField.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

const SearchField = ({
value = "",
onChange,
placeholder = "Search...",
name = "search",
ariaLabel = "Search",
disabled = false,
className = "",
}) => {
return (
    <div className={`search-field ${className}`.trim()}>
    <input
        type="text"
        className="search-field__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        aria-label={ariaLabel}
        disabled={disabled}
    />

    <span className="search-field__icon" aria-hidden="true">
        <img src={searchIcon} alt="" />
    </span>
    </div>
);
};

export default SearchField;
