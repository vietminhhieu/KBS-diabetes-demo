import React, { useEffect } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

const symptomMapArr = [
  "Khát nước",
  "Đi tiểu nhiều lần",
  "Ăn nhiều",
  "Mệt mỏi",
  "Khô miệng",
  "Ngứa da",
  "Sụt cân",
  "Nhìn mờ",
  "Đau tê chân tay",
  "Nhiễm trùng",
  "Sạm da",
  "Lâu lành vết thương",
  "Ngủ ngáy",
  "Tăng cân nhanh",
];

const Symptom = ({ inputSymptomValue, setInputSymptomValue }) => {
  const handleInputSymptomValue = (e) => {
    const symptomArr = inputSymptomValue.symptom.map((el) => el);
    symptomArr.push(e.target.value);

    setInputSymptomValue({
      ...inputSymptomValue,
      [e.target.name]: symptomArr,
    });
  };

  useEffect(() => {
    console.log("InputSymptomValue: " + inputSymptomValue.symptom);
  }, [inputSymptomValue]);

  return (
    <div className="symptom big-part">
      <label className="first-label" htmlFor="symptom">
        Triệu chứng:
      </label>
      <Row>
        {symptomMapArr.map((item, index) => (
          <Col xs={3} key={index}>
            <input
              onChange={(e) => handleInputSymptomValue(e)}
              type="checkbox"
              id={`symptom${index + 1}`}
              name="symptom"
              value={`disease-symptom${index + 1}`}
            />
            <label htmlFor={`symptom${index + 1}`}>{item}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Symptom;
