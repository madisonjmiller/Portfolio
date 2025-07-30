import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard.js";
//import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              GET TO KNOW <strong className="blue">ME!</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
          </Col>
        </Row>
        <h1 className="project-heading">
          PROFESSIONAL <strong className="blue">SKILLSET </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">TOOLS</strong> I USE
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;

//<img src={laptopImg} alt="about" className="img-fluid" />