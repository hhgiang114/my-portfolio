import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../resource/img/icon-bg.png";
import Typed from "typed.js";
import { BrowserRouter as Router } from "react-router-dom";

export const About = () => {
  const textIntro = useRef(null);

  useEffect(() => {
    const toRotate = ["Welcome to my portfolio", "Oh, you found me!"];
    const options = {
      strings: toRotate,
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 2000,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(textIntro.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Router>
      <section className="about" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="wrap">
                {"{<"}
                <span ref={textIntro}></span> {}
                {"/>}"}
              </span>
              <h1>{"Giang Hoang"}</h1>

              <p>
                I'm a computer science student with a curious mind and a love
                for building things that live on the web. While I’m early in my
                career, I’ve been teaching myself full-stack web development
                through personal projects—everything from interactive websites
                to small web apps. I enjoy turning ideas into code and learning
                by doing. I work mostly with JavaScript, React, and I'm always
                experimenting with new tools and frameworks. <br></br>
                I’m looking for a working student role where I can grow as a
                developer, contribute to real projects, and learn from
                experienced teammates. I'm excited to bring my enthusiasm and
                self-starting attitude to the table.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img
                src={headerImg}
                alt="Header"
                style={{ width: "620px", height: "600px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
