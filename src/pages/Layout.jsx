import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from "../components/offCanvas";
import { Card, Modal } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import '../App.css'
import '../utils/styles/layout.css'

import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSigun] = useState(false);
  
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseSignup = () => setShowSigun(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSigun(true);

  return (
    <>
      <Navbar expand="lg" className="top-nav" sticky="top">
        <Container fluid>
          <SideBar />
          <Navbar.Brand as={Link} to="/">
              DIVE-HUB
          </Navbar.Brand>
          <Nav.Link as={Link} to="/live">
            Live
          </Nav.Link>
          <Form inline className="search">
            <Row>
              <Col>
              <Form.Control
                type="text"
                placeholder={"Search Mitumba, Vehicles, Construction materials, Clothes, Services"}
                className="mr-sm-2"
                />
                </Col>
                <Col className="search_button">
                  <Button type="submit"><BsSearch /></Button>
                </Col>
            </Row>
          </Form>
          <Nav.Link as={Link} to="/about">
            About DiveHub
          </Nav.Link>
          <Nav.Link>
            <Button onClick={handleShowSignup} > Create Free Account </Button>
          </Nav.Link>
          <Nav.Link>
            <Button nClick={handleShowLogin} > Log In </Button>
          </Nav.Link>
        </Container>
      </Navbar>
    
      
      <Navbar className="sub-nav" as={Card.Header}>
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Vehicles
            </Nav.Link>
            {/**Add Page Links for guys, couples, trans */}
            <Nav.Link as={Link} to={"/"}>
              Construction Materials
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Clothes
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Services
            </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

      <Card>
        <Card.Body id={"main"} className="body">
          {/**Login Modol */}
          <Modal
            show={showLogin}
            onHide={handleCloseLogin}
            backdrop="static"
            keyboard={false}
            className="modal">
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LogIn/>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </Modal>

          {/**Sign Up Modols */}
          <Modal
            show={showSignup}
            onHide={handleCloseSignup}
            backdrop="static"
            keyboard={false}
            className="modal">
            <Modal.Header closeButton>
              <Modal.Title>Logo Here</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <SignUp />
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </Modal>
          {/**Layout Outlet point */}
          <Outlet />
        </Card.Body>
      </Card>

      <Navbar className="bottom-nav" sticky='bottom'>
        <Container className="layout-container">
          <Row>
            <Col>
              <div>Join DIVE-HUB to Buy and Sell you products & services</div>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="button" onClick={handleShowSignup}>Join FREE</Button>
            </Col>
          </Row>
            
        </Container>
      </Navbar>
    </>
  )
};

export default Layout;