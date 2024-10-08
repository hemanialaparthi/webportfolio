import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bot.jpg";
import projImg2 from "../assets/img/food.png";
import projImg3 from "../assets/img/flappybird.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Health ChatBot",
      description: "An AI-driven chatbot designed to assist users in diagnosing symptoms and providing health advice and information about nearby hospitals.",
      imgUrl: projImg1,
    },
    {
      title: "Recipe Generator + Calorie Tracker",
      description: "Utilizing APIs, this project offers college students easy recipes and automatic calorie calculations, making meal planning effortless.",
      imgUrl: projImg2,
    },
    {
      title: "Flappy Bird Mod",
      description: "A fun flappy bird game clone but with an addition of a mod which involves potions (like Minecraft).",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects I've completed over the years. I'm constantly seeking opportunities to expand my skills by taking on new challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">School Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>""</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>NEW PROJECTS COMING SOON</p>
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