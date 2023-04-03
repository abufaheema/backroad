import React, { useState } from "react";
import { Container, Navbar,Nav} from 'react-bootstrap'
import img from '../assets/logo.svg'
import {FaTimes,FaBars,FaWhatsapp,FaGithub,FaFacebook} from 'react-icons/fa'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
      <div>
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
              <img src={img} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle onClick={handleToggle} className="navbar-toggle">
              {toggle ? <FaTimes /> : <FaBars />}
            </Navbar.Toggle>
            <Navbar.Collapse className="navbar-collapse">
              <Nav className="nav mx-auto">
                <Nav.Link href="#home" className="nav-link1">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link1">
                  About
                </Nav.Link>
                <Nav.Link href="#services" className="nav-link1">
                  Services
                </Nav.Link>
                <Nav.Link href="#feature" className="nav-link1">
                  Feature Tour
                </Nav.Link>
                <Nav.Link href="#gallery" className="nav-link1">
                  Gallery
                </Nav.Link>
              </Nav>
              <Nav className="nav nav-icon">
                <Nav.Link href="" target="_blank">
                  <FaWhatsapp className="icon" />
                </Nav.Link>
                <Nav.Link href="" target="_blank">
                  <FaGithub className="icon" />
                </Nav.Link>
                <Nav.Link href="" target="_blank">
                  <FaFacebook className="icon" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header