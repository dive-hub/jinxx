import React, { useState } from 'react';
import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsGoogle, BsTwitterX } from "react-icons/bs";

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="signup-container; containergoogle">
      <h2 className='logp'>Create Account</h2>
      <form onSubmit={handleSubmit}>
      <div className="d-grid gap-2">
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className="input-field"
        />
      </div>
      <div className="d-grid gap-2">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className="input-field"
        />
      </div>
      <div className="d-grid gap-2">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className="input-field"
        />
      </div>
      <div className="d-grid gap-2">
      
        <Button variant="primary" size="lg" className='button' type='submit'>
          Create Account
        </Button>
        
        <Container>
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
        <Button variant="primary" size='lg' className='button'>
          Sign up without Email
        </Button>
          <p className='logp'>Already have an account? <a href="/">Login</a></p>
      </div>
      </form>
      
      
      
    </div>
  );
}

export default SignUp;