import { useState } from "react";

interface Props {
  questions: string;
  answers: string[];
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
  callback: Function;
}

const Questions = () => {};

export function BasicQuestion({
  questions,
  answers,
  userAnswer,
  questionNr,
  totalQuestions,
  callback,
}: Props): JSX.Element {
  return (
    <div>
      <title>Basic Quiz</title>
    </div>
  );
}
