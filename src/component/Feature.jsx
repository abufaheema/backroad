import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {FaMap} from 'react-icons/fa'
import img from "../assets/tour-1.jpeg";
import img1 from '../assets/tour-2.jpeg'
import img2 from '../assets/tour-3.jpeg'
import img3 from '../assets/tour-4.jpeg'
import img4 from '../assets/tour-5.jpeg'
import img5 from "../assets/tour-6.jpeg";


const Feature = () => {
    return (
      <div id="feature" className="section feature">
        <Container>
          <Row>
            <Col>
              <div className="feature-title">
                <h2>
                  feature <span>tour</span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="g-5 mt-5 p-3">
            <Col className="col-md-4 col-12">
              <Card className="tour-card">
                <div className="card-img-details">
                  <Card.Img
                    variant="top"
                    src={img}
                    className="img-fluid tour-img"
                  />
                  <Card.Subtitle className="tour-date">
                    <p>august 26th, 2020</p>
                  </Card.Subtitle>
                </div>

                <Card.Body>
                  <div className="tour-info">
                    <Card.Title>
                      <h4>tibet adventure</h4>
                    </Card.Title>
                    <Card.Subtitle>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque vitae tempore voluptatum maxime
                        reprehenderit eum quod exercitationem fugit, qui
                        corporis.
                      </p>
                    </Card.Subtitle>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <FaMap /> china
                        </span>
                      </p>
                      <p>6 days</p>
                      <p>from $2100</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4 col-12">
              <Card className="tour-card">
                <div className="card-img-details">
                  <Card.Img
                    variant="top"
                    src={img1}
                    className="img-fluid tour-img"
                  />
                  <Card.Subtitle className="tour-date">
                    <p>October 1th, 2020</p>
                  </Card.Subtitle>
                </div>

                <Card.Body>
                  <div className="tour-info">
                    <Card.Title>
                      <h4>Best Of Java</h4>
                    </Card.Title>
                    <Card.Subtitle>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque vitae tempore voluptatum maxime
                        reprehenderit eum quod exercitationem fugit, qui
                        corporis.
                      </p>
                    </Card.Subtitle>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <FaMap /> Indonesia
                        </span>
                      </p>
                      <p>11 Days</p>
                      <p>From $140</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4 col-12">
              <Card className="tour-card">
                <div className="card-img-details">
                  <Card.Img
                    variant="top"
                    src={img2}
                    className="img-fluid tour-img"
                  />
                  <Card.Subtitle className="tour-date">
                    <p>September 15th, 2020</p>
                  </Card.Subtitle>
                </div>

                <Card.Body>
                  <div className="tour-info">
                    <Card.Title>
                      <h4>Explore Hong Kong</h4>
                    </Card.Title>
                    <Card.Subtitle>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque vitae tempore voluptatum maxime
                        reprehenderit eum quod exercitationem fugit, qui
                        corporis.
                      </p>
                    </Card.Subtitle>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <FaMap /> Hong Kong
                        </span>
                      </p>
                      <p>8 Days</p>
                      <p>From $5000</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4 col-12">
              <Card className="tour-card">
                <div className="card-img-details">
                  <Card.Img
                    variant="top"
                    src={img3}
                    className="img-fluid tour-img"
                  />
                  <Card.Subtitle className="tour-date">
                    <p>September 15th, 2020</p>
                  </Card.Subtitle>
                </div>

                <Card.Body>
                  <div className="tour-info">
                    <Card.Title>
                      <h4>Explore Hong Kong</h4>
                    </Card.Title>
                    <Card.Subtitle>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque vitae tempore voluptatum maxime
                        reprehenderit eum quod exercitationem fugit, qui
                        corporis.
                      </p>
                    </Card.Subtitle>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <FaMap /> Hong Kong
                        </span>
                      </p>
                      <p>8 Days</p>
                      <p>From $5000</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4 col-12">
              <Card className="tour-card">
                <div className="card-img-details">
                  <Card.Img
                    variant="top"
                    src={img4}
                    className="img-fluid tour-img"
                  />
                  <Card.Subtitle className="tour-date">
                    <p>September 15th, 2020</p>
                  </Card.Subtitle>
                </div>

                <Card.Body>
                  <div className="tour-info">
                    <Card.Title>
                      <h4>Explore Hong Kong</h4>
                    </Card.Title>
                    <Card.Subtitle>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque vitae tempore voluptatum maxime
                        reprehenderit eum quod exercitationem fugit, qui
                        corporis.
                      </p>
                    </Card.Subtitle>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <FaMap /> Hong Kong
                        </span>
                      </p>
                      <p>8 Days</p>
                      <p>From $5000</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4 col-12">
              <Card className="tour-card">
                <div className="card-img-details">
                  <Card.Img
                    variant="top"
                    src={img5}
                    className="img-fluid tour-img"
                  />
                  <Card.Subtitle className="tour-date">
                    <p>September 15th, 2020</p>
                  </Card.Subtitle>
                </div>

                <Card.Body>
                  <div className="tour-info">
                    <Card.Title>
                      <h4>Explore Hong Kong</h4>
                    </Card.Title>
                    <Card.Subtitle>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque vitae tempore voluptatum maxime
                        reprehenderit eum quod exercitationem fugit, qui
                        corporis.
                      </p>
                    </Card.Subtitle>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <FaMap /> Hong Kong
                        </span>
                      </p>
                      <p>8 Days</p>
                      <p>From $5000</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="tour-btn">
                <button className="btn1">all tours</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Feature