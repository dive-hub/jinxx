import React, { useState } from 'react';
import '../App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsGoogle, BsTwitterX } from "react-icons/bs";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Implement signup logic
    alert(`Username: ${username}, Email: ${email}`);
  };

  return (
    <div className="signup-container">
      <h2 className='logp'>Create Account</h2>
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
      
        <Button variant="primary" size="lg" onClick={handleSignUp} className='button'>
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
          <p className='logp'>Already have an account? <a href="/login">Login</a></p>
      </div>
      
      
    </div>
  );
}

export default SignUp;