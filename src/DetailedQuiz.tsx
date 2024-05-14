import { useState } from "react";
import { HomePage } from "./HomePage_Buttons";
import { Button } from "react-bootstrap";
import { DetailedQues } from "./detailedQues";
// import { ProgressBar } from "./progressBar";
export function DetailedQuestion() {
  const [tab, setTab] = useState<string>("detailed");

  return (
    <>
      {tab === "home" ? (
        <HomePage />
      ) : (
        <>
          <div>
            <div className="Header-Background">
              <header className="App-header4">
                <h1
                  style={{
                    fontSize: "50px",
                  }}
                >
                  Detailed Quiz
                </h1>
              </header>
              <div className="buttonContainer">
                <Button
                  onClick={() => setTab("home")}
                  className="Home-button"
                  style={{
                    margin: "20px auto",
                  }}
                >
                  Home Page
                </Button>
              </div>
            </div>
            <div className="QuizBody">
              <DetailedQues></DetailedQues>
            </div>
          </div>
        </>
      )}
    </>
  );
}
