import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pjEnciv from "../assets/img/pj-enciv.png";
import pjBooking from "../assets/img/pj-booking.png";
import pjTuiter from "../assets/img/pj-tuiter.png";
import pjAgility from "../assets/img/pj-agility.png";
import pjPortfolio from "../assets/img/pj-portfolio.png";
import pjAimodel from "../assets/img/pj-aimodel.png";
import pjAws from "../assets/img/pj-aws.png";
import pjDetection from "../assets/img/pj-detection.png";
import pjGame from "../assets/img/pj-game.png";
import pjAndroidSocial from "../assets/img/pj-android-social.png";
import pjJet from "../assets/img/pj-jet.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Civil Pursuit",
      description: "Productive democratic deliberation online",
      imgUrl: pjEnciv,
    },
    {
      title: "Booking App",
      description: "Booking App for Traveling",
      imgUrl: pjBooking,
    },
    {
      title: "Tuiter",
      description: "Twitter Clone Social Media App",
      imgUrl: pjTuiter,
    },
    {
      title: "Agility",
      description: "Team Management App",
      imgUrl: pjAgility,
    },
    {
      title: "Portfolio",
      description: "My Portfolio Website",
      imgUrl: pjPortfolio,
    },
  ];

  const mlProjects = [
    {
      title: "Newsgroup Posts",
      description: "AWS, NLP",
      imgUrl: pjAws,
    },
    {
      title: "Runtime Prediction",
      description: "Graph",
      imgUrl: pjAimodel,
    },
    {
      title: "Object Detection",
      description: "CV",
      imgUrl: pjDetection,
    },
    {
      title: "Game Genre Prediction",
      description: "NLP",
      imgUrl: pjGame,
    },
  ];

  const androidProjects = [
    {
      title: "Social Media App",
      description: "Java, Firebase, Android Studio",
      imgUrl: pjAndroidSocial,
    },
    {
      title: "Jet Game",
      description: "Java, Android Studio, Gyroscope",
      imgUrl: pjJet,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <p>Professional and academic projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Android</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            webProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            mlProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            androidProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
