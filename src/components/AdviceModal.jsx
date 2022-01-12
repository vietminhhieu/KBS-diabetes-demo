import React from "react";
import { Modal, Button } from "react-bootstrap";
import diabetesDataArr from "../data/DiabetesData";

const AdviceModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={() => props.onHide(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {diabetesDataArr.map((item, index) => {
            if (index === props.resIndex) {
              return <h3 key={index}>{item.diagnose}</h3>;
            }
          })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {diabetesDataArr.map((item, index) => {
          if (index === props.resIndex) {
            return (
              <h5
                style={{ margin: "0 0.5rem 0 0.5rem", textAlign: "justify" }}
                key={index}
              >
                {item.adviceTitle}
              </h5>
            );
          }
        })}
        {diabetesDataArr.map((item, index) => {
          if (index === props.resIndex) {
            return item.advice.map((el, ind) => (
              <p
                style={{ margin: "0 1rem 0 2rem", textAlign: "justify" }}
                key={ind}
              >{` + ${el}`}</p>
            ));
          }
        })}
        <h6 style={{ margin: "0 0.5rem 0 0.5rem", textAlign: "justify" }}>
          Chúng tôi khuyên bạn nên đến gặp trực tiếp các bác sĩ chuyên khoa để
          biết rõ hơn về tình trạng của mình
        </h6>
        <h6 style={{ margin: "0 0.5rem 0 0.5rem", textAlign: "justify" }}>
          Cảm ơn bạn đã dùng hệ thống tư vấn khám bệnh tiểu đường
        </h6>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.onHide(false)}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdviceModal;
