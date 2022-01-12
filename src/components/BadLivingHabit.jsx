import React, { useEffect } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

const habitMapArr = [
  "Sử dụng đồ có ga",
  "Bỏ bữa sáng",
  "Sử dụng các chất béo bão hòa",
  "Ít ăn rau quả",
  "Thức đêm",
  "Ít vận động",
];

const BadLivingHabit = ({ inputHabitValue, setInputHabitValue }) => {
  const handleInputHabitValue = (e) => {
    const habitArr = inputHabitValue.habit.map((el) => el);
    habitArr.push(e.target.value);

    setInputHabitValue({
      ...inputHabitValue,
      [e.target.name]: habitArr,
    });
  };

  useEffect(() => {
    console.log("InputHabitValue: " + inputHabitValue.habit);
  }, [inputHabitValue]);

  return (
    <div className="bad-living-habit big-part">
      <label className="first-label" htmlFor="bad-living-habit">
        Thói quen sinh hoạt xấu:
      </label>
      <Row>
        {habitMapArr.map((item, index) => (
          <Col xs={6} md={4} xxl={3} key={index}>
            <input
              onChange={(e) => handleInputHabitValue(e)}
              type="checkbox"
              id={`habit${index + 1}`}
              name="habit"
              value={`bad-habit${index + 1}`}
            />
            <label htmlFor={`habit${index + 1}`}>{item}</label>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BadLivingHabit;
