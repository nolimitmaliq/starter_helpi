import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
//import "./BasicInfoStyle.css";  Add CSS file for styling later
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function BasicQuest(): JSX.Element {
  // This is the State (Model)
  const [options, setOptions] = useState<string>("Middle School");

  // This is the Control
  function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {
    setOptions(event.target.value);
  }

  // This is the View
  return (
    <div>
      <Form.Check
        type="radio"
        name="emotions"
        onChange={updateEmotion}
        id="emotion-check-happy"
        label="Middle School"
        value="Middle School"
        checked={options === "Middle School"}
      />
      <Form.Check
        type="radio"
        name="emotions"
        onChange={updateEmotion}
        id="emotion-check-sad"
        label="Sad"
        value="sad"
        checked={options === "High School"}
      />
      <Form.Check
        type="radio"
        name="emotions"
        onChange={updateEmotion}
        id="emotion-check-angry"
        label="Angry"
        value="angry"
        checked={options === "Undergraduate College"}
      />
      <div>The user is feeling {options}.</div>
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

// function BasicQuizInfo() {
//   return (
//     <div className="App-buttons5">
//     <h1 className="Text-Border">Basic Quiz</h1>
//     <Basix
//     //</div>
//   );
// }

export default BasicQuest;
