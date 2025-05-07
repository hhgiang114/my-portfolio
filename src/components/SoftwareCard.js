import { Row, Col } from "react-bootstrap";
import code from "../resource/img/code.svg";

export const SoftwareCard = ({ imgUrl, githubUrl, title, description }) => {
  return (
    <div className="center-box">
      <Row
        className="mb-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          border: "2px solid #0e3d64",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "16px 0px",
        }}
      >
        <Col xs={12} sm={7}>
          <div className="software-section">
            <img src={imgUrl} alt="Projects" loading="lazy" />
          </div>
        </Col>
        <Col xs={12} sm={5}>
          <div className="software-intro">
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="link-icon mb-2">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <img src={code} alt="Icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
