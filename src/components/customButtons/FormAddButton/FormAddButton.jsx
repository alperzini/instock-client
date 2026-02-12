import "./FormAddButton.scss";

function FormAddButton( props ) {
    const {label, isDisabled} = props;

    return (
        <button className="add-button" type="submit" disabled={isDisabled} >{label}</button>
    );
}
export default FormAddButton;