import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { SoftwareCard } from "./SoftwareCard";
import img from "../resource/img/SoPra/img.png";
import img1 from "../resource/img/SoPra/img1.png";
import img2 from "../resource/img/SoPra/img2.png";
import img3 from "../resource/img/SoPra/img3.png";
import img4 from "../resource/img/SoPra/img4.png";
import img5 from "../resource/img/SoPra/img5.png";

import bonsai_img from "../resource/img/SoPra/bonsai_img.png";
import bonsai_img1 from "../resource/img/SoPra/bonsai_img1.png";
import bonsai_img2 from "../resource/img/SoPra/bonsai_img2.png";
import bonsai_img3 from "../resource/img/SoPra/bonsai_img3.png";
import bonsai_img4 from "../resource/img/SoPra/bonsai_img4.png";

import travel from "../resource/img/Websites/travel.png";
import weather from "../resource/img/Websites/weather.png";
import loading from "../resource/img/Websites/loading.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const websites = [
    {
      title: "Travel-Landing-Page",
      isWebsite: true,
      description: "Built with HTML, CSS, and responsive design",
      imgUrl: travel,
      Url: "https://landing-page-travel-dresden-city.netlify.app/",
      githubUrl: "https://github.com/hhgiang114/landing-page-travel",
    },
    {
      title: "Weather-App",
      isWebsite: true,
      description:
        "Built using HTML, an active API, and advanced CSS and JavaScript",
      imgUrl: weather,
      Url: "https://hhgiang114.github.io/weather-react-app/",
      githubUrl: "https://github.com/hhgiang114/weather-react-app",
    },
    {
      title: "Dictionary App",
      description: "Work in process",
      imgUrl: loading,
    },
  ];

  const software = [
    {
      title: "UpAndDown Game",
      imgUrl: [img, img1, img2, img3, img4, img5],
      githubUrl: "https://github.com/hhgiang114/UpAndDownGame",
      description:
        "A card game for two players, implemented in Kotlin using BoardGameWork-framework.",
    },

    {
      title: "BonsaiGame-Clone",
      imgUrl: [bonsai_img, bonsai_img1, bonsai_img2, bonsai_img3, bonsai_img4],
      githubUrl: "https://github.com/hhgiang114/BonsaiGame-copycat",
      description: "haha",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    I’m excited to share a mix of university assignments and
                    self-taught experiments that reflect my passion for
                    problem-solving through code. These projects helped me
                    bridge theory with practice — whether through structured
                    coursework or late-night curiosity sprints. Below are a few
                    highlights:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Software</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Case study</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {software.map((project, index) => {
                            return <SoftwareCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {websites.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>
                          {"</>"}
                          <br />
                          Work in Progress
                        </h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
