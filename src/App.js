import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import FamilyHistoryDiabetes from "./components/FamilyHistoryDiabetes";
import BadLivingHabit from "./components/BadLivingHabit";
import Cause from "./components/Cause";
import Symptom from "./components/Symptom";
import { useState } from "react";
import diabetesDataArr from "./data/DiabetesData";
import AdviceModal from "./components/AdviceModal";

function App() {
  const [inputValue, setInputValue] = useState({
    disease: "",
    parent: "",
    habit: [],
    cause: [],
    symptom: [],
  });

  const [modalShow, setModalShow] = useState(false);

  function handleSubmitButton(e) {
    e.preventDefault();

    if (inputValue.disease === "")
      alert(
        "Tiền sử gia đình có người mắc bệnh tiểu đường không được để trống. Mời bạn chọn lại!"
      );
    if (inputValue.disease === "yes" && inputValue.parent === "")
      alert("Chi tiết không được để trống. Mời bạn chọn lại!");

    if (inputValue.habit.length === 0)
      alert("Thói quen sinh hoạt xấu không được để trống. Mời bạn chọn lại!");

    if (inputValue.cause.length === 0)
      alert("Nguyên nhân không được để trống. Mời bạn chọn lại!");

    if (inputValue.symptom.length === 0)
      alert("Triệu chứng không được để trống. Mời bạn chọn lại!");

    if (
      inputValue.disease !== "" &&
      inputValue.habit.length !== 0 &&
      inputValue.cause.length !== 0 &&
      inputValue.symptom.length !== 0
    ) {
      setModalShow(true);
    }
  }

  // calculate result
  let max = 0,
    diseaseIndex;
  const resultIndex = diabetesDataArr.map((item, index) => {
    const handleFamilyHistoryDiabetes = () => {
      if (item.disease === "no") {
        if (inputValue.disease === "no") return 1;
        if (
          inputValue.disease === "yes" &&
          inputValue.parent === "father-or-mother"
        )
          return 0.5;
        if (
          inputValue.disease === "yes" &&
          inputValue.parent === "father-and-mother"
        )
          return 0;
      }
      if (item.disease === "yes" && item.parent === "father-or-mother") {
        if (inputValue.disease === "no") return 0.5;
        if (
          inputValue.disease === "yes" &&
          inputValue.parent === "father-or-mother"
        )
          return 1;
        if (
          inputValue.disease === "yes" &&
          inputValue.parent === "father-and-mother"
        )
          return 0.5;
      }
      if (item.disease === "yes" && item.parent === "father-and-mother") {
        if (inputValue.disease === "no") return 0;
        if (
          inputValue.disease === "yes" &&
          inputValue.parent === "father-or-mother"
        )
          return 0.5;
        if (
          inputValue.disease === "yes" &&
          inputValue.parent === "father-and-mother"
        )
          return 1;
      }
    };
    const w1 = handleFamilyHistoryDiabetes();
    console.log("w1: " + w1);

    // handle input checkbox
    const handleInputCheckbox = (inputParam, itemParam) => {
      let count = 0;
      for (let i = 0; i < inputParam.length; i++) {
        for (let j = 0; j < itemParam.length; j++) {
          if (inputParam[i] === itemParam[j]) {
            ++count;
          }
        }
      }
      let finalCount = inputParam.length - count + (itemParam.length - count);
      return finalCount;
    };

    const w2 = handleInputCheckbox(inputValue.habit, item.habit);
    console.log("w2: " + w2);
    const w3 = handleInputCheckbox(inputValue.cause, item.cause);
    console.log("w3: " + w3);
    const w4 = handleInputCheckbox(inputValue.symptom, item.symptom);
    console.log("w4: " + w4);

    let result =
      (w1 * 4 + (1 - w2 * 0.2) * 3 + (1 - w3 * 0.1) * 5 + (1 - w4 * 0.1) * 5) /
      17;

    console.log("result: " + result);

    if (result > max) {
      max = result;
      diseaseIndex = index;
    }

    console.log("maxResult: " + max, "diseaseIndex:" + diseaseIndex);
    return diseaseIndex;
  });

  console.log("resIndex: " + resultIndex[resultIndex.length - 1]);

  return (
    <div className="App">
      <Container>
        <h1>Chào mừng bạn đến với hệ thống tư vấn bệnh tiểu đường</h1>
        <Form>
          <h3>Bạn hãy lựa chọn tình trạng của bạn hiện tại nhé</h3>

          {/* Tiền sử gia đình có người mắc bệnh tiểu đường */}
          <FamilyHistoryDiabetes
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <hr />

          {/* Thói quen sinh hoạt xấu */}
          <BadLivingHabit
            inputHabitValue={inputValue}
            setInputHabitValue={setInputValue}
          />
          <hr />

          {/* Nguyên nhân */}
          <Cause
            inputCauseValue={inputValue}
            setInputCauseValue={setInputValue}
          />
          <hr />

          {/* Triệu chứng */}
          <Symptom
            inputSymptomValue={inputValue}
            setInputSymptomValue={setInputValue}
          />

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmitButton(e)}
          >
            Xác nhận
          </Button>

          <AdviceModal
            show={modalShow}
            onHide={setModalShow}
            resIndex={resultIndex[resultIndex.length - 1]}
          />
        </Form>
      </Container>
    </div>
  );
}

export default App;
