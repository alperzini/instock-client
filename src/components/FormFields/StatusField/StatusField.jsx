import "./StatusField.scss";

function StatusField(props) {
    const { legend, name, selectedStatus, onChange } = props;

    return (
        <fieldset className="status-field__wrapper">
            <legend className="status-field__legend">{legend}</legend>
            <div className="status-field__radio-buttons-wrapper">
                <div className="status-field__radio-buttons-item-wrapper">
                    <input className="status-field__radio-button" id="inStockRadioButton"
                        type="radio" name={name} value="In Stock" checked={selectedStatus === "In Stock"} onChange={onChange} />
                    <label className="status-field__label" htmlFor="inStockRadioButton" >In stock</label>
                </div>
                <div className="status-field__radio-buttons-item-wrapper">
                    <input className="status-field__radio-button" id="outOfStockRadioButton"
                        type="radio" name={name} value="Out of Stock" checked={selectedStatus === "Out of Stock"} onChange={onChange} />
                    <label className="status-field__label" htmlFor="outOfStockRadioButton" >Out of stock</label>
                </div>
            </div>
        </fieldset>
    );
}
export default StatusField;