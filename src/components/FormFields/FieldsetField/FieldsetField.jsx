import "./FieldsetField.scss";

function FieldsetField(props) {
    const { title, isSecond, children } = props;

    return (
        <div className={`fieldset__wrapper ${isSecond ? "fieldset__wrapper--second" : ""}`}>
            <h2 className="fieldset__title">{title}</h2>
                {children}
        </div>
    );
}
export default FieldsetField;