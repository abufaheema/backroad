import React, { useState } from "react";
import { Container, Navbar,Nav} from 'react-bootstrap'
import img from '../assets/logo.svg'
import {FaTimes,FaBars} from 'react-icons/fa'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
      <div>
        <Navbar className="navbar" expand="lg">
          <Container>
            <a href="/" className="navbar-brand">
              <img src={img} alt="" />
            </a>
            <Navbar.Toggle onClick={handleToggle} className="navbar-toggle">
              {toggle ? <FaTimes /> : <FaBars />}
            </Navbar.Toggle>
            <Navbar.Collapse className="navbar-collapse">
              <Nav className="nav">
                <a href="#home" className="nav-link">
                  Home
                </a>
                <a href="#about" className="nav-link">
                  About
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header