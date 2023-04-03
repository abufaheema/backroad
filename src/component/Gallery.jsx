import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import img from "../assets/tour-1.jpeg";
import img1 from "../assets/tour-2.jpeg";
import img2 from "../assets/tour-3.jpeg";
import img3 from "../assets/tour-4.jpeg";
import img4 from "../assets/tour-5.jpeg";
import img5 from "../assets/tour-6.jpeg";
import {FaSearch} from 'react-icons/fa'


const Gallery = () => {
    return (
      <div id="gallery" className="section gallery">
        <Container fluid>
          <Row className='p-3 g-0'>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img1} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img2} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img4} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img2} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img5} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
            <Col className="col-md-3 col-12">
              <div className="gallery-img-container">
                <img src={img3} alt="" className="gallery-img" srcset="" />
                <a href="" className="gallery-icon">
                  {" "}
                  <FaSearch />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Gallery
