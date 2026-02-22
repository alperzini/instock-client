import "./PageNotFound.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import BackArrowButton from "../customButtons/BackArrowButton/BackArrowButton";

const PageNotFound = ({ title, content }) => {

    return (
        <PageWrapper>
            <div className="page-not-found__header" >
                <BackArrowButton />
                <h1 className="page-not-found__title">{title}</h1>
            </div>
            <p className="page-not-found__content">{content}</p>
        </PageWrapper>
    );
};

export default PageNotFound;