import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from "../components/offCanvas";

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
      
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link >
              <Link to="/" style={{ textDecoration: 'none'}} >Girls</Link>
            </Nav.Link>
            {/**Add Page Links for guys, couples, trans */}
            <Nav.Link >
              <Link to="/" style={{ textDecoration: 'none'}} >Couples</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/" style={{ textDecoration: 'none'}} >Guys</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/" style={{ textDecoration: 'none'}} >Trans</Link>
            </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="light" data-bs-theme="light" fixed='bottom'>
        <Container style={{ alignItems: 'center' }}>
            <div>Join Stripchat to interact with models!</div>
            <Col xs="auto" fluid>
              <Button type="submit">Join FREE</Button>
            </Col>
        </Container>
      </Navbar>
      {/**Layout Outlet point */}
      <Outlet />
    </>
  )
};

export default Layout;