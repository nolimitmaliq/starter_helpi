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
          <Spinner />
        ) : (
          careers.map((career, index) => {
            // Splitting career details into bullet points
            const careerDetails = career.split("\n");
            // Extracting career title
            const title = careerDetails.shift(); // Remove first element from array and return it

            return (
              <Card key={index} className="career-card">
                <Card.Title>{title}</Card.Title>
                <Card.Body>
                  <ul>
                    {careerDetails.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </>
  );
}
