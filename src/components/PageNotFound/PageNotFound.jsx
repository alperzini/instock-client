import "./PageNotFound.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import BackArrowButton from "../customButtons/BackArrowButton/BackArrowButton";

const PageNotFound = ({ content }) => {

    return (
        <PageWrapper>
            <div className="page-not-found__header" >
                <BackArrowButton />
                <h1 className="page-not-found__title">404 - PAGE NOT FOUND</h1>
            </div>
            <p className="page-not-found__content">{content}</p>
        </PageWrapper>
    );
};

export default PageNotFound;