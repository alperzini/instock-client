import closeIcon from "../../assets/icons/close-24px.svg";

const CloseIcon = ({ className = "", ...props }) => {
return (
    <img
    src={closeIcon}
    className={`icon-button__img ${className}`.trim()}
    alt=""
    aria-hidden="true"
    {...props}
    />
);
};

export default CloseIcon;
