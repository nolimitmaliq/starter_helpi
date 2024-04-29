import { OpenAI } from "openai";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { BasicQuestion } from "./BasicQuiz";
// import { DetailedQuestion } from "./DetailedQuiz";
let API_KEY = "one";
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
// localStorage.getItem();
interface Key {
  key: string;
}
export default function Chat({ key }: Key): JSX.Element {
  const [response, SetResponse] = useState<string | null>("");

  async function getResponse() {
    const QandA = localStorage.getItem(key);
    if (QandA) {
      console.log("Data from Baic Quiz:", QandA);
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

      SetResponse(completion.choices[0].message.content);
    }
  }
  return (
    <div>
      <Button onClick={getResponse}>Submit</Button>
      {response}
    </div>
  );
}
