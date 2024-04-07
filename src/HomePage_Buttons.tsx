import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";

export function HomePage(): JSX.Element {
  const [displayText, setDisplayText] = useState<boolean>(false);
  const handleButton = () => {
    setDisplayText(!displayText);
  };
  return (
    <div className="App-buttons">
      {/* <header className="App-buttons"> */}
      <div>
        <h1>
          <Button onClick={handleButton} className="Career-Quiz">
            <FaArrowRight />
            Career Quizzes
          </Button>
          {displayText && (
            <div className="Text1Wrapper">
              <p className="Text1">
                Basic Quiz offers a "Check All That Apply" questions. This
                allows the user to choose multiple answers for each question to
                generate a more accurate career result.
              </p>
            </div>
          )}
        </h1>
      </div>
      <div>
        <h1>
          <Button onClick={handleButton} className="Basic-Quiz">
            Basic Quiz
          </Button>
          {displayText && (
            <div className="Basic-QuizText">
              <p className="Basic-QuizText">
                Basic Quiz offers a "Check All That Apply" questions. This
                allows the user to choose multiple answers for each question to
                generate a more accurate career result.
              </p>
            </div>
          )}
          <a
            href="https://Careerquizlo.org/Basic"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-style">Take Basic Quiz</button>
          </a>
        </h1>
        <p className="Basic-QuizText">
          Basic Quiz offers a "Check All That Apply" questions. This allows the
          user to choose multiple answers for each question to generate a more
          accurate career result.
        </p>
      </div>
      {/* <div className="App-header2">
        <h1>Detailed Quiz</h1>
        <p>
          Detailed Quiz offers fill in the blank questions. This allows the user
          to answer with their own freedom for each question to generate a more
          accurate career result.
        </p>
        <a
          href="https://Careerquizlo.org/Detailed"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-style">Take Quiz</button>
        </a>
      </div>
      <div className="App-header2">
        <h1>Career Tips</h1>
        <p>
          Career Tips allows users to learn how to get thier potential career.
          This page will enlighten users about useful sites and the hiring
          process.
        </p>
        <a
          href="https://Careerquizlo.org/Tips"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-style">View Tips</button>
        </a>
      </div> */}
      {/* </header> */}
    </div>
  );
}
