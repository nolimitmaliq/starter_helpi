import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { BasicQuiz, DetailedQuiz } from "./CareerQuiz";
import { ChangeImages } from "./image2";
import { BasicQuestion } from "./BasicQuiz";
import { DetailedQuestion } from "./DetailedQuiz";
// import { HomePage } from "./HomePage_Buttons";
//import Menubar from "./Menubar";

//import img from "./spaceheader.jpg";
import spaceheader from "./spaceheader.jpg";
import career1 from "./image 1.jpg";
import career2 from "./image 2.jpg";
import career3 from "./image 4.jpg";
import career4 from "./image 5.jpg";
import career5 from "./Accountant.jpg";
import career6 from "./police officer.jpg";
import career7 from "./engineer.jpg";
import career8 from "./psychologist.jpg";
import { Linkedin } from "lucide-react";

const Images = [
  { url: career1, alt: "Lawyer" },
  { url: career2, alt: "Doctor" },
  { url: career3, alt: "Personal Trainer" },
  { url: career4, alt: "Professor" },
  { url: career5, alt: "Accountant" },
  { url: career6, alt: "Police Office" },
  { url: career7, alt: "Engineer" },
  { url: career8, alt: "Psychologist" },
];
const profession = [
  "Lawyer",
  "Doctor",
  "Personal Trainer",
  "Professor",
  "Accountant",
  "Police Officer",
  "Engineer",
  "Psychologist",
];

export function Footer() {
  const [email, setEmail] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className="footer">
      <h1 className="footer">
        <h2>Sign Up to get more advice on Careers!</h2>
        <div className="signup-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </h1>
    </div>
  );
}

export function HomePage(): JSX.Element {
  const [tab, setTab] = useState<string>("home");
  const [displayText2, setDisplayText2] = useState<boolean>(false);
  const [displayText3, setDisplayText3] = useState<boolean>(false);

  const handleButton2 = () => {
    setDisplayText2(!displayText2);
  };
  const handleButton3 = () => {
    setDisplayText3(!displayText3);
  };

  const [jobSearchInfoVisible, setJobSearchInfoVisible] = useState(false);

  // Function to handle the click event of the "Job Search" button
  const handleJobSearchClick = () => {
    // Toggle the visibility of the paragraph
    setJobSearchInfoVisible(!jobSearchInfoVisible);
  };

  return (
    <>
      {tab === "basic" ? (
        <BasicQuestion />
      ) : tab === "detailed" ? (
        <DetailedQuestion />
      ) : (
        <div className="Body">
          <header
            className="App-header"
            style={{
              backgroundImage: `url(${spaceheader})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>Welcome to CareerWay!</h1>
            <h1 className="caption">
              Endless Career Possibilites, All the Way to the Moon and Back and
              We Will Be The Rocket!!
            </h1>
          </header>
          <div className="buttonContainer">
            <a href="#differentCareers" className="button ">
              Different Careers
            </a>
            <a href="#careerQuizzes" className="button">
              Career Quizzes
            </a>
            <a href="#careerTips" className="button">
              Career Tips
            </a>
            <a href="#aboutUs" className="button">
              About Us
            </a>
          </div>

          <div id="differentCareers">
            <h1 className="App-differentcareersbutton">Different Careers</h1>
            <p className="HomePage-text">
              There are so many career options to choose from. One must first
              consider their strengths, interests, and passions. It's also
              important to think about job availability, growth opportunity, and
              salary expectations. But ultimately, choosing a career is a
              personal decision that should reflect one's own goals, values and
              ambitions. It can be helpful to speak to professionals in fields
              of interest or work with a career coach to gain more clarity and
              make an informed decision. Remember, this choice isn't set in
              stone, people often change careers in their lifetime, so don't
              feel pressured to find the "perfect" option.
            </p>
          </div>
          <div></div>
          <div>
            <div>
              <h1>
                <div
                  style={{
                    maxWidth: "1200px",
                    width: "100%",
                    aspectRatio: "10/6",
                    margin: "0 auto",
                  }}
                >
                  <ChangeImages
                    images={Images}
                    profession={profession}
                  ></ChangeImages>
                  <p></p>
                </div>
              </h1>
            </div>
            <div id="careerQuizzes">
              <h1
                className="App-buttons2"
                style={{
                  margin: "1px auto",
                }}
              >
                Career Quizzes
              </h1>
              <p className="HomePage-text">
                Ever pondered upon your life's direction and struggled to
                identify a career you'd feel passionate about? Now, thanks to
                our Basic and Detailed Quizzes, deciphering your future becomes
                possible. Our quizzes are designed for everyone, irrespective of
                your age, race, ethnicity, gender, or nationality.
              </p>
            </div>
            <div>
              <div>
                <Button onClick={handleButton2} className="Career-Quiz2 ">
                  View Quizzes
                </Button>
                {displayText2 && (
                  <>
                    <BasicQuiz></BasicQuiz>
                    <Button
                      onClick={() => setTab("basic")}
                      className="Career-Quiz2"
                    >
                      Basic Quiz
                    </Button>
                    <DetailedQuiz></DetailedQuiz>
                    <Button
                      onClick={() => setTab("detailed")}
                      className="Career-Quiz2"
                    >
                      Detailed Quiz
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div></div>
          </div>
          <div id="careerTips">
            <div>
              <h1 className="App-buttons2">Career Tips</h1>
              <p className="HomePage-text">
                Career Tips is a resource designed to guide users on how to
                pursue their potential career. This platform educates users
                about various useful websites and provides an insight into the
                hiring process.
              </p>
            </div>
            <div>
              <h1>
                <div>
                  <Button onClick={handleButton3} className="Career-Quiz2">
                    View Tips
                  </Button>
                  {displayText3 && (
                    <>
                      <Button
                        onClick={handleButton3}
                        className="Career-Buttons"
                      >
                        Resume Help
                      </Button>
                      <Button
                        onClick={handleJobSearchClick}
                        className="Career-Buttons"
                      >
                        Job Search
                      </Button>
                      {jobSearchInfoVisible && (
                        <p className="HomePage-text">
                          Links to Explore in Job Searches: Linked{""}
                          <Linkedin>https://www.linkedin.com/feed/</Linkedin>,
                          Indeed, Monster, GlassDoor
                        </p>
                      )}
                      <Button
                        onClick={handleButton3}
                        className="Career-Buttons"
                      >
                        Career Advice
                      </Button>
                      <Button
                        onClick={handleButton3}
                        className="Career-Buttons"
                      >
                        Academic Planning
                      </Button>
                    </>
                  )}
                </div>
              </h1>
            </div>
            <div id="aboutUs">
              <div>
                <h1 className="App-buttons2">About Us</h1>
                <p className="HomePage-text">
                  Our mission is to help people of all ages find the right
                  career for them. All information on the website is credible
                  and please stay connected if you would like to receive updates
                  on the website and newer features. We are working towards
                  improving the website to help everyone.
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
