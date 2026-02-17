import "./Button.scss";

const Button = ({
type = "button",
variant = "primary", 
fullWidth = false,
onClick,
children,
className = "",
disabled = false,
}) => {
const classes = [
    "button",
    `button--${variant}`,
    fullWidth ? "button--full" : "",
    className,
]
    .filter(Boolean)
    .join(" ");

return (
    <button
    type={type}
    className={classes}
    onClick={onClick}
    disabled={disabled}
    >
    {children}
    </button>
);
};

export default Button;
