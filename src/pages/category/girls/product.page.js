import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import WebcamVideo from '../../../components/WebCamVideo';

function ProductPage() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" sticky='top'>
        <Container fluid>
            <Nav className="me-auto">
            <Nav.Link >
                <Link to="/" style={{ textDecoration: 'none'}} >Profile</Link>
            </Nav.Link>
            {/**Add Page Links for guys, couples, trans */}
            <Nav.Link >
                <Link to="/" style={{ textDecoration: 'none'}} >Videos</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to="/" style={{ textDecoration: 'none'}} >Photos</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to="/" style={{ textDecoration: 'none'}} >Feed</Link>
            </Nav.Link> 
            </Nav>
        </Container>
    </Navbar>
    <div >
      <WebcamVideo/>
    </div>

    <Outlet />
    </>
  )
}

export default ProductPage;