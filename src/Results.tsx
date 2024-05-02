import { Card } from "react-bootstrap";
import "./Results.css";
import { Spinner } from "./Spinner";

interface Careers {
  careers: string[];
}

export function Results({ careers }: Careers) {
  return (
    <>
      <div className="Results-Title">Results</div>
      <div className="Results">
        {careers.length === 0 ? (
          <Spinner></Spinner>
        ) : (
          careers.map((career, index) => (
            <Card key={index} className="career-card">
              <Card className="Seperate-Careers">
                <Card.Body>
                  <Card.Text>{career}</Card.Text>
                </Card.Body>
              </Card>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
