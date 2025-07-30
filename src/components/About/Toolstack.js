import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVercel,
  SiMacos,
  SiVim
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiGit, DiVisualstudio } from "react-icons/di";
import { TbBrandBitbucketFilled } from "react-icons/tb";
import { AiOutlineLinux } from "react-icons/ai";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Bitbucket">
        <TbBrandBitbucketFilled />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="VS Code">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="VS 2022">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Linux">
        <AiOutlineLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Vim">
        <SiVim />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="MacOS">
        <SiMacos />
      </Col>
    </Row>
  );
}

export default Toolstack;