import React, { useEffect } from "react";
import "./style.css";

const FamilyHistoryDiabetes = ({ inputValue, setInputValue }) => {
  const handleOnClickValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const blockRadioInput = () => {
    if (inputValue.disease === "" || inputValue.disease === "no") {
      return { display: "none" };
    }
  };

  useEffect(() => {
    console.log("SelecttValue: " + inputValue.disease);
    console.log("InputValue: " + inputValue.parent);
  }, [inputValue]);

  return (
    <div className="family-history-diabetes d-flex big-part">
      <label className="select-label" htmlFor="family-history-diabetes">
        Tiểu sử gia đình mắc bệnh tiểu đường:
      </label>
      <select
        name="disease"
        id="get-disease"
        onChange={(e) => handleOnClickValue(e)}
      >
        <option value="none">---</option>
        <option value="no">Không</option>
        <option value="yes">Có</option>
      </select>
      <div
        className="value-yes"
        style={blockRadioInput()}
        onChange={(e) => {
          handleOnClickValue(e);
        }}
      >
        <label className="radio-label" htmlFor="detail-family-history-diabetes">
          Chi tiết:
        </label>
        <div className="first-radio">
          <input
            type="radio"
            id="parent1"
            name="parent"
            value="father-or-mother"
          />

          <label htmlFor="parent1"> Có bố hoặc mẹ mắc</label>
        </div>
        <div className="second-radio">
          <input
            className="ml-4"
            type="radio"
            id="parent2"
            name="parent"
            value="father-and-mother"
          />
          <label htmlFor="parent2"> Cả bố và mẹ mắc</label>
        </div>
      </div>
    </div>
  );
};

export default FamilyHistoryDiabetes;
