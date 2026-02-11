import "./DeleteButton.scss";

function DeleteButton( props ) {
    const {label, onClick} = props;

    return (
        <button className="delete-button" type="button" onClick={onClick} >{label}</button>
    );
}
export default DeleteButton;