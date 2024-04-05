import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  // function basicQuestion(){

  // }
  // .button-style{
  //   background-color: 
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Career Quiz</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://Careerquizlo.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <header className="App-buttons">
        <h1>Career Quizzes</h1>
        <h3>Have you ever wondered what you wanted to do in life, but could never find a passionate career?
          Well, now you can, with the Basic Quiz and Detailed Quiz, you can figure out your future. Anyone, from
          any age, race, ethnicity, sex, and nationality can take this quiz.
        </h3>
        <body>
        <header className="App-header2">
          <h1>Basic Quiz</h1>
        </header>
          <p>Basic Quiz offers a "Check All That Apply" questions. This allows the user
            to choose multiple answers for each question to generate a more accurate career result.
          </p>
        </body>
        <a href="https://Careerquizlo.org/Basic"  target="_blank" rel="noreferrer">
          <button className="button-style">Take Quiz</button>
        </a>
        <header className="App-header2">
          <h1>Detailed Quiz</h1>
        </header>
          <p>Detailed Quiz offers fill in the blank questions. This allows the user
            to answer with their own freedom for each question to generate a more accurate career result.
          </p>
        <a href="https://Careerquizlo.org/Detailed"  target="_blank" rel="noreferrer">
          <button className="button-style">Take Quiz</button>
        </a>
        <header className="App-header2">
          <h1>Career Tips</h1>
        </header>
          <p>Career Tips allows users to learn how to get thier potential career. This page will
            enlighten users about useful sites and the hiring process.
          </p>
        <a href="https://Careerquizlo.org/Tips"  target="_blank" rel="noreferrer">
          <button className="button-style">View Tips</button>
        </a>
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
