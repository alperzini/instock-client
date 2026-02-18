import "./BackArrowButton.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import BackArrowIcon from "../../../assets/icons/arrow_back-24px.svg";

function BackArrowButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        // Check if there is history to go back to, otherwise navigate to home
        if (window.history.length > 1 || location.key !== 'default') {
            navigate(-1);
        } else {
            navigate('/', { replace: true }); // Fallback to home page, replace the current entry
        }
    };

    return (
            <button className="back-button" type="button" onClick={handleGoBack} >
                <img className="back-button__icon" src={BackArrowIcon} alt="Back arrow icon." />
            </button>
    );
}
export default BackArrowButton;