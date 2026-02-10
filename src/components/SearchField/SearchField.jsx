import "./SearchField.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

const SearchField = ({
value = "",
onChange,
placeholder = "Search...",
name = "search",
ariaLabel = "Search",
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
    />

    <img
        src={searchIcon}
        alt=""
        className="search-field__icon"
        aria-hidden="true"
    />
    </div>
);
};

export default SearchField;
