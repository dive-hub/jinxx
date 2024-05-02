import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Card, Nav, Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import WebcamVideo from '../../../components/WebCamVideo';
import Chat from '../../Chat';


function ProductPage() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" sticky='top'>
        <Container fluid>
            <Nav className="me-auto">
            <Nav.Link as={Link}>Profile</Nav.Link>
            {/**Add Page Links for guys, couples, trans */}
            <Nav.Link as={Link}>Videos</Nav.Link>
            <Nav.Link as={Link}>Photos</Nav.Link>
            <Nav.Link as={Link}>Feed</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <Card>
        <Card.Body>
            <Container>
                <Row>
                    <Col>
                    <WebcamVideo/>
                    </Col>
                    <Col>
                    <Chat/>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
    <Outlet />
    </>
  )
}

export default ProductPage;