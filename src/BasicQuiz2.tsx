import { useState } from "react";

interface Props {
  questions: string;
  answers: string[];
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

const Questions = () => {};

export function BasicQuestion({
  questions,
  answers,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props): JSX.Element {
  return (
    <div>
      <title>Basic Quiz</title>
    </div>
  );
}
