import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGoogle, BsTwitterX } from "react-icons/bs";
import { AuthContext } from './AuthContext';
import '../App.css';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      login(data.token);
      navigate('/dashboard'); // Redirect to User Dashboard
      // Add modal close logic if applicable
    } else {
      console.log('Login failed');
      alert('wrong details');
    }
  };

  return (
    <div className='signup-container containergoogle'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            className='input-field'
            required
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
          <Button variant="primary" size="lg" className='button' type='submit'>
            Log In
          </Button>
          <a className='logpa' href='./Home'>Forgot password?</a>
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
    </div>
  );
}

export default LogIn;
