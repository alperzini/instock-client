import "./FieldsetsWrapper.scss";

function FieldsetsWrapper({ children }) {

    return (
        <div className="fieldsets-wrapper__wrapper" >
            <div className="fieldsets-wrapper" >
                {children}
            </div>
        </div>
    );
}
export default FieldsetsWrapper;