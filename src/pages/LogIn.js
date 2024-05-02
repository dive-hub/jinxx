import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGoogle, BsTwitterX } from "react-icons/bs";
import '../App.css'

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Login logic
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please fill in both username and password fields.');
    }
  };

  return (
    <div className='signup-container; containergoogle'>
      {!loggedIn ? (
        <form>
          <div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
              className='input-field'
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='input-field'
            />
          </div>
          <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={handleLogin} className='button'>
            Log In
          </Button>
          <a href='' className='logpa'>Forgot password?</a>
          </div>
          
          <Container className='containergoogle'>
            <p className='logp'>Or continue with</p>
            <Row>
              <Col as={Button} className='button'>
                <BsGoogle/> Google
              </Col>
              <Col as={Button} className='button'>
                <BsTwitterX/> Twitter
              </Col>
            </Row>
          </Container>
        </form>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LogIn;