import "./FormCancelButton.scss";
import { useNavigate, useLocation } from 'react-router-dom';

function FormCancelButton() {
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
        <button className="form-cancel-button" type="button" onClick={handleGoBack} >Cancel</button>
    );
}
export default FormCancelButton;