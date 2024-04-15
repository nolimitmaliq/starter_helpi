import { useState } from "react";
import { BasicQuestion } from "./QuestionChange";

type Question = {
  question: string;
  answers: string;
};
const totalQuestions = 11;
const FullBasicQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Question[]>([]);
  const [quizDone, setQuizDone] = useState(0);
  const StartQuiz = async () => {};
  const CheckAnswer = () => {};
  const NextQuestion = () => {};
  const PreviousQuestion = () => {};
  return (
    <div className="BasicQuiz">
      <h1>Basic Quiz</h1>
      <button className="start" onClick={StartQuiz}>
        Start
      </button>
      <BasicQuestion
        questions={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        questionNr={number + 1}
        totalQuestions={11}
        callback={CheckAnswer}
      />
      <button className="next" onClick={NextQuestion}>
        Next
      </button>
    </div>
  );
};
