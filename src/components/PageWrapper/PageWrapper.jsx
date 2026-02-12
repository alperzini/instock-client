import "./PageWrapper.scss";

function PageWrapper({ children }) {

    return (
        <>
            <div className="page-wrapper__header-background"></div>
            <div className="page-wrapper__wrapper">
                <div className="page-wrapper" >
                    {children}
                </div>
            </div>
        </>
    );
}
export default PageWrapper;