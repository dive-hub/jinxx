import React from 'react'
import { Modal } from 'react-bootstrap';

function LoginUtils() {
    const [showLogin, setShowLogin] = useState(true);
    
    
    const handleCloseLogin = () => setShowLogin(false);
    
    const handleShowLogin = () => setShowLogin(true);
  return (
    <>
    <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LogIn/>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginUtils;