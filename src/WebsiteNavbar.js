import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import petcareLogo from "./icons/pet-first-aid.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Services from "./Services";
import ImagesComponent from "./ImagesComponent";
import Contact from "./Contact";
import About from "./About";

function WebsiteNavbar() {
  return (
    <BrowserRouter>
      <div className="navbar-grid">
        <Container fluid>
          <Row>
            <Col className="grid-1">
              <Link to="/">
                <img src={petcareLogo} alt=""></img>
                <p className="logo-text">Pet-Care</p>
              </Link>
            </Col>
            <Col className="grid-2"></Col>
            <Col className="grid-3">
              <Link to="/home" className="grid-3-text">
                Home
              </Link>
            </Col>
            <Col className="grid-4"></Col>
            <Col className="grid-5">
              <Link to="/services" className="grid-5-text">
                Services
              </Link>
            </Col>
            <Col className="grid-6"></Col>
            <Col className="grid-7">
              <Link to="/contact" className="grid-7-text">
                Contact
              </Link>
            </Col>
            <Col className="grid-8"></Col>
            <Col className="grid-9">
              <Link to="/about" className="grid-9-text">
                About
              </Link>
            </Col>
            <Col className="grid-10"></Col>
            <Col className="grid-11">
              <button className="account-button">Account</button>
            </Col>
            <Col className="grid-12"></Col>
          </Row>
        </Container>

        <Routes>
          <Route path="/home"> element={}</Route>
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default WebsiteNavbar;
