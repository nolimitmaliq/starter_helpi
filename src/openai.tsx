import { OpenAI } from "openai";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { BasicQuestion } from "./BasicQuiz";
// import { DetailedQuestion } from "./DetailedQuiz";
let API_KEY = localStorage.getItem("MYKEY");
let key = "";
if (API_KEY !== null) {
  key = JSON.parse(API_KEY);
}
console.log(key);
const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });
// localStorage.getItem();
interface Key {
  questionAndAnswer: string;
  onSaveData: () => void;
}
export default function Chat({
  questionAndAnswer,
  onSaveData,
}: Key): JSX.Element {
  const [response, SetResponse] = useState<string | null>("");

  async function getResponse() {
    const QandA = localStorage.getItem(questionAndAnswer);
    console.log(QandA);
    if (QandA) {
      console.log("Data from Quiz:", QandA);
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "We constructed a set of questions, multiple choice, checkbox, short responses and long respones. Our goal is to try and provide 5 possible career paths based on the user responses to the questions with an explaination about the careers including their salary, possible path to their career, an indeed link and a linkdIn link to potential jobs and potential networking oppurtunities.",
          },
          {
            role: "user",
            content: `Here are my questions and and answers:${QandA}`,
          },
          // { role: "user", content: quiz },
          // {
          //   role: "user",
          //   content: quiz2,
          // },
        ],
        model: "gpt-3.5-turbo",
      });
      console.log(completion);
      SetResponse(completion.choices[0].message.content);
    }
    // console.log(response);
  }
  return (
    <div>
      <Button
        className="Submit-button"
        onClick={() => {
          onSaveData();
          getResponse();
        }}
      >
        Submit
      </Button>
      {response}
    </div>
  );
}
