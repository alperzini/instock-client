import "./ErrorMessage.scss";
import errorIcon from "../../../assets/icons/error-24px.svg";

function ErrorMessage(props) {
    const { error, isError } = props;

    return (
        <>
            {isError ? (
                <div className="error-message">
                    <img className="error-message__icon" src={errorIcon} alt="Error icon showing an exclamation mark inside a circle." />
                    <span className="error-message__text">{error}</span>
                </div>
            ) : null}
        </>
    );
}
export default ErrorMessage;