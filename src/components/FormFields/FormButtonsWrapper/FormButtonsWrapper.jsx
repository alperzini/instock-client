import "./FormButtonsWrapper.scss";

function FormButtonsWrapper( {children} ) {

    return (
        <div className="form-buttons-wrapper" >
            {children}
        </div>
    );
}
export default FormButtonsWrapper;