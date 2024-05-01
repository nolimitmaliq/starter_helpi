import { Card } from "react-bootstrap";
import Chat from "./openai";
interface careers {
  careers: string[];
}
export function Results({ careers }: careers) {
  return (
    <div>
      <title>Results</title>
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
