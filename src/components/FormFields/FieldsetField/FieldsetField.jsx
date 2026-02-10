import "./FieldsetField.scss";

function FieldsetField(props) {
    const { title, hasBorder, children } = props;

    return (
        <div className={`fieldset__wrapper ${hasBorder ? "fieldset__wrapper--border" : ""}`}>
            <h2 className="fieldset__title">{title}</h2>
                {children}
        </div>
    );
}
export default FieldsetField;