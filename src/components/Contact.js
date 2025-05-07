import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../resource/img/icon-contact.png";
import "animate.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import { toast } from "sonner";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [mouseOver, setMouseOver] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_w8n6r09",
        "template_fc862pb",
        form.current,
        "6mIlokROBoO4XNTar"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sent");
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          toast.error("Message Failed to Send!");
        }
      );
  };

  return (
    <section
      className="contact"
      id="contact"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={{
        width: `${mouseOver ? "100%" : "90%"}`,
        margin: "auto",
        borderRadius: `${mouseOver ? "0" : "50px"}`,
        transition: "all 1s ",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <AnimationOnScroll animateIn="animate__animated animate__zoomIn">
              <img
                src={contactImg}
                alt="Contact Me"
                style={{ width: "500px", height: "400px" }}
                loading="lazy"
              />
            </AnimationOnScroll>
          </Col>
          <Col size={12} md={6}>
            <AnimationOnScroll animateIn="animate__animated animate__fadeIn">
              <div>
                <h2>Let's get in touch!</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your email"
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="Name"
                        name="user_name"
                        placeholder="Your name"
                        required
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" placeholder="Message" required />
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
