import WebsiteNavbar from "./WebsiteNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImagesComponent from "./ImagesComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img4 from "./icons/img-4.jpg";
import "./Services.css";
import Image from "react-bootstrap/Image";
import CardComponent from "./CardComponent";
import TellMeMoreBtn from "./icons/tell-me-more-btn.svg";

function Services() {
  return (
    <>
      <Container>
        <Row className="mb-5 mt-3 pb-4">
          <Col id="pet-care-services-text-1">
            <h1>
              <span className="fadeInUp-animation">
                Welcome to Pet-Care, it is our priority to ensure the well-being
                of your furry friends.
              </span>
            </h1>
          </Col>
        </Row>
        <span className="fadeInUp-animation-main-content">
          <Row>
            <Col></Col>
            <Col xl={12}>
              <p className="pb-3 pt-1">
                At Pet-Care, we understand the unique bond you share with your
                pets, and we are committed to providing compassionate,
                personalized care for your furry companions.
              </p>
            </Col>
            <Col>
              <a href="#">
                <img src={TellMeMoreBtn} className="tell-me-more-btn"></img>
              </a>
            </Col>
          </Row>
          <Row id="services-second-row">
            <Col xs={4}>
              <Image src={img4} rounded />
            </Col>
            <Col></Col>
            <Col md={6}>
              <ul className="services-ul">
                <li className="services-li">Routine Wellness Check-Ups</li>
                <li className="services-li">Specialized Treatments</li>
                <li className="services-li">Preventive Care</li>
                <li className="services-li">Vaccinations</li>
                <li className="services-li">Dental Services</li>
              </ul>
            </Col>
          </Row>
        </span>
      </Container>
      <Container>
        <Row>
          <Col>
            <CardComponent></CardComponent>
          </Col>
          <Col>
            <CardComponent></CardComponent>
          </Col>
          <Col>
            <CardComponent></CardComponent>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <CardComponent></CardComponent>
          </Col>
          <Col>
            <CardComponent></CardComponent>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
