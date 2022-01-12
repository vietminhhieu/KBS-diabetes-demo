import React, { useEffect } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

const causeMapArr = [
  "Ít vận động",
  "Không đủ insulin cần thiết",
  "Tụy bị tổn thương",
  "Đã từng bị tiểu đường thai kỳ",
  "Ăn uống không lành mạnh",
  "Rối loạn lipid",
  "Tăng huyết áp",
  "Tuổi cao (65 tuổi trở lên)",
  "Tăng cân trong thai kỳ",
  "Trên 35 tuổi",
  "Sinh em bé trên 4 cân",
  "Có hội chứng PCOS",
];

const Cause = ({ inputCauseValue, setInputCauseValue }) => {
  const handleInputCauseValue = (e) => {
    const causeArr = inputCauseValue.cause.map((el) => el);
    causeArr.push(e.target.value);

    setInputCauseValue({
      ...inputCauseValue,
      [e.target.name]: causeArr,
    });
  };

  useEffect(() => {
    console.log("InputCauseValue: " + inputCauseValue.cause);
  }, [inputCauseValue]);

  return (
    <div className="cause big-part">
      <label className="first-label" htmlFor="cause">
        Nguyên nhân:
      </label>
      <Row>
        {causeMapArr.map((item, index) => (
          <Col xs={3} key={index}>
            <input
              onChange={(e) => handleInputCauseValue(e)}
              type="checkbox"
              id={`cause${index + 1}`}
              name="cause"
              value={`reason${index + 1}`}
            />
            <label htmlFor={`cause${index + 1}`}> {item}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cause;
