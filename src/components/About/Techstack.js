import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
} from "react-icons/di";
import { PiFileCSharp } from "react-icons/pi";
import { TbAssemblyFilled, TbSql } from "react-icons/tb";
import { FaHtml5, FaNode } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="C#">
        <PiFileCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="SQL">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Node.js">
        <FaNode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="HTML5">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Assembly">
        <TbAssemblyFilled />
      </Col>
    </Row>
  );
}

export default Techstack;