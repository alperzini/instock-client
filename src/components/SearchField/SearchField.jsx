import "./SearchField.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

const SearchField = ({
id,
value,
defaultvalue = "",
onChange,
onSubmit,
placeholder = "Search...",
name = "search",
ariaLabel = "Search",
disabled = false,
className = "",
iconSize =24,
...rest
}) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && onSubmit) onSubmit(e);
    };
    
    const isControlled = value !== undefined;
return (
    <div className={`search-field ${disabled ? "search-field--disabled" : ""} ${className}`.trim()}>
    <input
        id = {id}
        type="text"
        className="search-field__input"
        name= {name}
        placeholder={placeholder}
        aria-label={ariaLabel}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        {...rest}
    />

    {showIcon && (
        <span className="search-field__icon" aria-hidden="true">
        <img
            src={searchIcon}
            alt=""
            width={iconSize}
            height={iconSize}
        />
        </span>
)}
    </div>
);
};

export default SearchField;
