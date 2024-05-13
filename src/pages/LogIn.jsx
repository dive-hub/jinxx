import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { BsGoogle, BsTwitterX } from 'react-icons/bs';
import '../App.css';
import createDriver from '../utils/neo4js/db_connect';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // added loggedIn state
  const [driver, setDriver] = useState(null); // State to hold the driver object

  // UseEffect to create the driver object when the component mounts
  useEffect(() => {
    const driver = createDriver();
    setDriver(driver);

    // Cleanup function to close the driver when the component unmounts
    return () => {
      if (driver) {
        driver.close();
      }
    };
  }, []);

  const handleLogin = async () => {
    if (!driver) return; // If driver is not initialized, return

    const session = driver.session();
    try {
      const result = await session.run('MATCH (u:User {username: $username, password: $password}) RETURN u', { username, password });
      if (result.records.length > 0) {
        setLoggedIn(true); // Set loggedIn to true if login successful
      } else {
        console.log('Login failed'); // Log failed attempt
      }
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      session.close();
    }
  };

  return (
    <div className='signup-container containergoogle'>
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
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
