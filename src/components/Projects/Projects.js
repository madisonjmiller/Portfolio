import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import classMosaic from "../../Assets/Projects/class-mosaic.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import uwm from "../../Assets/Projects/uwm.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classMosaic}
              title="Class Mosaic"
              description="A web-based scheduling tool that helps students build their ideal class schedules. Users can input available courses, and ClassMosaic intelligently generates optimized weekly schedules using multiple custom-built algorithms tailored to different preferences and lifestyles."
              ghLink="https://github.com/madisonjmiller/class-mosaic"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio Website"
              description="An online personal portfolio featuring a little bit about me, some of my Github projects, technical skills, and my resume. I set up the architecture from scratch with React but the theme and certain compenents are inspired by Soumyajit4419!"
              ghLink="https://github.com/madisonjmiller/madison-miller"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uwm}
              title="CRON to Azure Conversion"
              description="Migrated 4 legacy CRON jobs into C# Azure Functions, resulting in reduced operational overhead, increased maintainability, and more scalable cloud infrastructure. Modernized old email-sending solution and architected a Kafka-based solution that automated email sending within an Azure Function. Acquired hands-on experience in full-stack application development, version control and enterprise-grade software lifecycle processes, contributing to a production ready feature and maintaining 80%+ code coverage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
