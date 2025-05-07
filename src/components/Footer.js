import { Container, Col } from "react-bootstrap";
import linkedinIcon from "../resource/img/icon-linkedin.svg";
import githubIcon from "../resource/img/icon-gitgub.svg";
import mailIcon from "../resource/img/icon-mail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Col>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/gianghhoang14/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="https://github.com/hhgiang114"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubIcon}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="mailto:gianghhoang14@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mailIcon}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </Col>
      </Container>
    </footer>
  );
};
