import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
      <div id="contact" className="section contact">
        <Container>
          <Row className='p-4' >
            <Col className="col-md-6 col-12">
              <div className="contact-title">
                <h3>want latest tour info and updates?</h3>
                <p>Sign up for newsletter and stay up to date</p>
              </div>
            </Col>
            <Col className="col-md-6 col-12 ">
                        <Form.Group className="contact-form">
                            <Form.Control type='email' className='put' placeholder='your email' />
                            <button className='btn-submit' type='submit'>submit</button>
                            
                
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Contact