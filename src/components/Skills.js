import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../resource/img/Skills/html.svg";
import css from "../resource/img/Skills/css.svg";
import js from "../resource/img/Skills/js.svg";
import react from "../resource/img/Skills/react.svg";
import mongodb from "../resource/img/Skills/mongodb.svg";
import mysql from "../resource/img/Skills/mysql.svg";
import java from "../resource/img/Skills/java.svg";
import kotlin from "../resource/img/Skills/kotlin.svg";

import { useState } from "react";

export const Skills = () => {
  const [hovored, setHovored] = useState(false);

  const handleHover = (hovored) => {
    setHovored(hovored);
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "HTML5", img: html, shadowClass: "shadow-color-html" },
    { name: "CSS3", img: css, shadowClass: "shadow-color-css" },
    { name: "JavaScript", img: js, shadowClass: "shadow-color-js" },
    { name: "React JS", img: react, shadowClass: "shadow-color-reactjs" },
    { name: "My SQL", img: mysql, shadowClass: "shadow-color-mysql" },
    { name: "Mongo DB", img: mongodb, shadowClass: "shadow-color-mdb" },
    { name: "Java", img: java, shadowClass: "shadow-color-java" },

    { name: "Kotlin", img: kotlin, shadowClass: "shadow-color-kotlin" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I entered the world of front-end development by gaining some
                knowledge in HTML, CSS, JavaScript, React and frameworks such as
                Bootstrap. I can design and build responsive web interfaces that
                are optimized for different devices and screen sizes.
                <br></br> Through my university coursework, I’ve also developed
                a foundation in software development using Java. As part of a
                hands-on software practice module, I worked with Kotlin to
                create simple 2D board games using the{" "}
                <a href="https://tudo-aqua.github.io/bgw" target="_blank">
                  BoardGameWork (BGW)
                </a>{" "}
                framework.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                pauseOnHover={true}
                mouseTracking={true}
                className="owl-carousel owl-theme skill-slider"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                {skills.map((skill, index) => {
                  const skillImageClass = skill.shadowClass;
                  return (
                    <div className="item" key={index}>
                      <img
                        src={skill.img}
                        alt="skills"
                        className={skillImageClass}
                        style={{ width: "150px", height: "150px" }}
                        loading="lazy"
                      />
                      <h5>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
