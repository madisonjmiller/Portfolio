import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../Assets/logo.png';
import { CgGitFork } from 'react-icons/cg';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { Link } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColor] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Container to="/">
                <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
                </Nav.Link>
              </Container>
            </Nav.Item>

            <Nav.Item>
              <Container to="/about">
                <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: '2px' }} /> About
                </Nav.Link>
              </Container>
            </Nav.Item>

            <Nav.Item>
              <Container to="/projects">
                <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
                </Nav.Link>
              </Container>
            </Nav.Item>

            <Nav.Item>
              <Container to="/resume">
                <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
                </Nav.Link>
              </Container>
            </Nav.Item>
            
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/madisonjmiller"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} /> <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
