import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/about.jpeg'


const About = () => {
    return (
      <div id="about" className="about section">
        <Container>
          <Row>
            <Col >
              <div className="about-title">
                <h2>
                  about <span>us</span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className='p-3 g-5'>
            <Col className='col-md-6 col-12'>
              <div className="about-img">
                <img src={img} alt="" className='img-fluid' />
              </div>
            </Col>
            <Col className='col-md-6 col-12'>
              <div className="about-info">
                <h3>explore the diffrences</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem quibusdam cupiditate sit accusantium, ipsum
                  consequuntur mollitia architecto saepe natus ad voluptates,
                  incidunt voluptatibus, aperiam minus nam assumenda veniam
                  expedita aspernatur.
                </p>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem quibusdam cupiditate sit accusantium, ipsum
                  consequuntur mollitia architecto saepe natus ad voluptates,
                  incidunt voluptatibus, aperiam minus nam assumenda veniam
                  expedita aspernatur.
                </p>

                <button className="btn1">read more</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default About