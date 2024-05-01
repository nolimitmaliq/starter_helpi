import { Card } from "react-bootstrap";
import "./Results.css";
interface careers {
  careers: string[];
}
export function Results({ careers }: careers) {
  return (
    <>
      <div className="Results-Title">Results</div>
      <div className="Results">
        {careers.slice(0, 5).map((career, index) => (
          <div key={index} className="career-container">
            <Card className="career-card">
              <Card.Body>
                {/* Optionally, you can add a title for each career */}
                {/* <Card.Title>Career {index + 1}</Card.Title> */}
                <Card.Text>{career}</Card.Text>
              </Card.Body>
            </Card>
            {index < 4 && <hr className="career-divider" />}{" "}
            {/* Add horizontal line between each card */}
          </div>
        ))}
      </div>
    </>
  );
}
