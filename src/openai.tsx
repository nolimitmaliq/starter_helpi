import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { OpenAI } from "openai";
import { Results } from "./Results";

let API_KEY = localStorage.getItem("MYKEY");
let key = "";
if (API_KEY !== null) {
  key = JSON.parse(API_KEY);
}

const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

interface Key {
  questionAndAnswer: string;
  onSaveData: () => void;
  setChangeTab: (career: string) => void;
  careers: string[];
  setCareers: (career: string[]) => void;
}

export default function Chat({
  questionAndAnswer,
  onSaveData,
  setChangeTab,
  careers,
  setCareers,
}: Key): JSX.Element {
  // const [careers, setCareers] = useState<string[]>([]);
  // const [tab, setTab] = useState<string>("quiz");

  async function getResponse() {
    const QandA = localStorage.getItem(questionAndAnswer);
    if (QandA) {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "We constructed a set of questions, multiple choice, checkbox, short responses and long respones. Our goal is to try and provide 5 possible career paths based on the user responses to the questions with an explaination about the careers including a discription of what they will do in that field, their average salary, possible path to their career, an indeed link and a linkdIn link to potential jobs and potential networking oppurtunities.",
          },
          {
            role: "user",
            content: `Here are my questions and and answers:${QandA}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      // Extracting career paths from API response
      const response = completion.choices[0].message.content;
      let careerPaths: string[] = [];
      if (response !== null) {
        careerPaths = response.split("\n");
      }

      // Update state with career paths
      setCareers(careerPaths);
      console.log(response);
    }
  }

  return (
    <div>
      <Button
        className="Submit-button"
        onClick={() => {
          onSaveData();
          setChangeTab("results");
          getResponse();
        }}
      >
        Submit
      </Button>
      {careers.map((career, index) => (
        <Card key={index} className="career-card">
          <Card.Body>
            {/* <Card.Title>Career Path {index + 1}</Card.Title> */}
            <Card.Text>{career}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
