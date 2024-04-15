import { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  questions: string;
  answers: string[];
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
  callback: Function;
}
// function Counter(): JSX.Element {
//     const [value, setValue] = useState<number>(0);
//     return (
//         <span>
//             <Button onClick={() => setValue(value + 1)}>Next</Button> to {value}
//         </span>
//         <span>
//             <Button onClick={() => setValue(value - 1)}>Prev</Button> to {value}
//         </span>
//     );
// }

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
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: questions }} />
      <div>
        {answers.map((answer) => (
          <div>
            <button disabled={userAnswer} onClick={() => callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
