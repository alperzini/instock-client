import "./FormHeader.scss";
import BackArrowButton from "../../customButtons/BackArrowButton/BackArrowButton";

function FormHeader({ title }) {

    return (
        <div className="form-header" >
            <BackArrowButton />
            <h1 className="form-header__title">{title}</h1>
        </div>
    );
}
export default FormHeader;