import { useState } from "react";
import { HomePage, Footer } from "./HomePage_Buttons";
import { Button } from "react-bootstrap";

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
            <div className="QuizBody">ENTER ACTUAL CODE HERE</div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
