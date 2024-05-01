import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from "../components/offCanvas";
import { Card } from "react-bootstrap";

const Layout = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className='justify-content-end'>
        <Container fluid>
          <Nav className="me-auto">
            <SideBar />
            <Navbar.Brand>
                <Link to="/" style={{ textDecoration: 'none'}} >DIVE-HUB</Link>
            </Navbar.Brand>
            <Nav.Link>
                <Link to="/live" style={{ textDecoration: 'none'}} >Live</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/live" style={{ textDecoration: 'none'}} >Top Models</Link>
            </Nav.Link>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                  type="text"
                  placeholder="Search models, tags or countries, tip menu"
                  className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
            <Nav.Link>
                <Link to="/about" style={{ textDecoration: 'none'}} >
                    About DiveHub</Link>
            </Nav.Link>
            <Nav.Link href="#sign up"><Button>Create Free Account</Button></Nav.Link>
            <Nav.Link href="#log in"><Button>Log In</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Navbar bg="light" data-bs-theme="light" as={Card.Header}>
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Girls
            </Nav.Link>
            {/**Add Page Links for guys, couples, trans */}
            <Nav.Link as={Link} to={"/"}>
              Couples
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Guys
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Trans
            </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      {/**Layout Outlet point */}
      <Outlet />

      <Navbar bg="light" data-bs-theme="light" sticky='bottom'>
        <Container style={{ alignItems: 'center' }}>
            <div>Join Stripchat to interact with models!</div>
            <Col xs="auto" fluid>
              <Button type="submit">Join FREE</Button>
            </Col>
        </Container>
      </Navbar>
    </>
  )
};

export default Layout;