import { useState } from "react";
import { HomePage, Footer } from "./HomePage_Buttons";
import { Button } from "react-bootstrap";

const QUESTIONS = 11;

interface Question {
  question: string;
  type: "multipleChoice" | "checkbox" | "textbox";
  options: string[];
}

const questions: Question[] = [
  {
    question: "What is your highest leavel of education?",
    type: "multipleChoice",
    options: [
      "Middle School",
      "Elementary School",
      "High school",
      "Some College",
      "Undergraduate",
      "Post-Graduate",
    ],
  },
  {
    question: "What Subjects are you most interested in?",
    type: "checkbox",
    options: [
      "Math",
      "Social Studies/History",
      "Sciences",
      "Arts",
      "Language Arts and English",
    ],
  },
  {
    question:
      "If your favorite subject was not listed, what other areas are you interested in?",
    type: "textbox",
    options: [],
  },
  {
    question: "What are some of your hobbies and interests?",
    type: "checkbox",
    options: ["Sports", "Video Games", "Writing", "Music"],
  },
  {
    question: "How would you like to work?",
    type: "multipleChoice",
    options: ["In a team", "Individual", "Both"],
  },
  {
    question: "What type of environments do you prefer to spend more time in?",
    type: "textbox",
    options: [
      "Office",
      "Hospital Settings",
      "Home/Remote",
      "Creative Work Environment",
    ],
  },
  {
    question:
      "I am interested in a career that involves helping others and making a difference?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strogly Disagree",
    ],
  },
  {
    question: "I prefer more hands-on approach to my job?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strogly Disagree",
    ],
  },
  {
    question: "I thrive in a role that requires more interaction with people?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strogly Disagree",
    ],
  },
  {
    question:
      "A high-salary job is more important to me than job satisfaction?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strogly Disagree",
    ],
  },
  {
    question: "I prefer a more flexible career instead of a typical 9-5 job?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strogly Disagree",
    ],
  },
  {
    question: "How long do you plan to attend college for?",
    type: "multipleChoice",
    options: ["No College", "Bachelor's Degree", "Masters Degree", "PHD"],
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const NextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].type === "multipleChoice" && (
        <div>
          {questions[currentQuestion].options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name={option}
                value={option}
                onChange={(e) => setSelectedOptions([e.target.value])}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {questions[currentQuestion].type === "checkbox" && (
        <div>
          {questions[currentQuestion].options.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                name={option}
                value={option}
                onChange={(e) =>
                  setSelectedOptions((prev) => [...prev, e.target.value])
                }
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {questions[currentQuestion].type === "textbox" && (
        <div>
          <input
            type="text"
            onChange={(e) => setSelectedOptions([e.target.value])}
          />
        </div>
      )}
      <button onClick={NextQuestion}>Next</button>
    </div>
  );
}

export function BasicQuestion() {
  const [tab, setTab] = useState<string>("basic");

  return (
    <>
      {tab === "home" ? (
        <HomePage />
      ) : (
        <>
          <div>
            <div className="Header-Background">
              <header className="App-header">
                <h1>Basic Quiz</h1>
              </header>
              <div className="buttonContainer">
                <Button onClick={() => setTab("home")} className="button">
                  Home Page
                </Button>
              </div>
            </div>
            <div className="QuizBody">
              <Quiz />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
