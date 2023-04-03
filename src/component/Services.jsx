import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaWallet,FaTree,FaSocks} from 'react-icons/fa'

const Services = () => {
    return (
      <div id="services" className="section services">
        <Container>
          <Row>
            <Col>
              <div className="services-title">
                <h2>
                  our <span>services</span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className='g-5'>
            <Col className="col-md-4 col-12">
              <div className="services-info ">
                <div className="services-icon ">
                  <FaWallet className="icon p-4" />
                </div>
                <div className="services-text ">
                  <h4>saving money</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non quaerat, id voluptatibus reprehenderit illo repellendus.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-4 col-12">
              <div className="services-info">
                <div className="services-icon">
                  <FaTree className="icon  p-4" />
                </div>
                <div className="services-text">
                  <h4>endless bikings</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non quaerat, id voluptatibus reprehenderit illo repellendus.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-4 col-12">
              <div className="services-info">
                <div className="services-icon">
                  <FaSocks className="icon  p-4" />
                </div>
                <div className="services-text">
                  <h4>amazing comfort</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non quaerat, id voluptatibus reprehenderit illo repellendus.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Services