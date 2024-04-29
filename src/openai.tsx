import { OpenAI } from "openai";
// import { BasicQuestion } from "./BasicQuiz";
// import { DetailedQuestion } from "./DetailedQuiz";
let API_KEY = "one";
const quizKey = "quiz";
const quizKey2 = "quiz2";
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
// localStorage.getItem();
async function main() {
  const quiz = localStorage.getItem(quizKey);
  console.log("Data from Baic Quiz:", quiz);

  const quiz2 = localStorage.getItem(quizKey2);
  console.log("Data from Detailed Quiz:", quiz2);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "We constructed a set of questions, multiple choice, checkbox, short responses and long respones. Our goal is to try and provide 5 possible career paths based on the user responses to the questions with an explaination about the careers including their salary, possible path to their career, an indeed link and a linkdIn link to potential jobs and potential networking oppurtunities.",
      },
      // { role: "user", content: quiz },
      // {
      //   role: "user",
      //   content: quiz2,
      // },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
main();
