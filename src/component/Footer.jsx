import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import {FaWhatsapp,FaGithub,FaFacebook} from 'react-icons/fa'


const Footer = () => {
    return (
      <div className="section footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-link">
                <Nav className="nav">
                  <Nav.Link href="#home" className="nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="nav-link">
                    About
                  </Nav.Link>
                  <Nav.Link href="#services" className="nav-link">
                    Services
                  </Nav.Link>
                  <Nav.Link href="#feature" className="nav-link">
                    Feature Tour
                  </Nav.Link>
                  <Nav.Link href="#gallery" className="nav-link">
                    Gallery
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="footer-icon">
                <Nav>
                  <Nav.Link href="" target="_blank">
                    <FaWhatsapp className="icon" />
                  </Nav.Link>
                  <Nav.Link href="" target="_blank">
                    <FaGithub className="icon" />
                  </Nav.Link>
                  <Nav.Link href="" target="_blank">
                    <FaFacebook  className='icon' />
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="footer-text">
                <p>
                  Copyright &copy; Backroads Travel Tours Company 2023 All
                  Rights Reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer