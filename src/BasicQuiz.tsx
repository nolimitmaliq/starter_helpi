import React from "react";
import { Form, Button } from "react-bootstrap";
import "./BasicInfoStyle.css"; // Add CSS file for styling
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Q1() {
  return (
    <div>
      <h1>What level of education are you in right now?</h1>;
      <Form.Check
        type="radio"
        id="choices"
        label="a"
        name="choices"
        value="A: High School"
      />
    </div>
  );
}

// function Q2() {
//   return (
//     <div>
//       <Form.Check
//         type="radio"
//         id="choices"
//         label="a"
//         name="choices"
//         value="a"
//       />
//       <Form.Check
//         type="radio"
//         id="choices"
//         label="b"
//         name="choices"
//         value="b"
//       />
//       <Form.Check
//         type="radio"
//         id="choices"
//         label="c"
//         name="choices"
//         value="c"
//       />
//       <Form.Check
//         type="radio"
//         id="choices"
//         label="d"
//         name="choices"
//         value="d"
//       />
//     </div>
//   );
// }

function popup() {
  <h1>Question 1</h1>;
  //setDirection("forward");
}

function BasicQuizInfo({ onClose }: { onClose: () => void }) {
  return (
    <div className="popup">
      <div className="App-buttons5">
        <h1 className="Text-Border">Basic Quiz</h1>
        <Button onClick={popup} className="NavigationButtonRight">
          {<FaArrowLeft />}
        </Button>
        <Button onClick={popup} className="NavigationButtonLeft">
          {<FaArrowRight />}
        </Button>
        <Q1 />
      </div>
    </div>
  );
}

export default BasicQuizInfo;
