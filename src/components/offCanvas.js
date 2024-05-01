import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import OffCanvasComponets from './offcanvascomponents';
import { BsList } from "react-icons/bs";

const options = [
  {
    name: 'dropdown',
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Nav.Link href="#">
        <BsList onClick={toggleShow}/> </Nav.Link>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <OffCanvasComponets />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function SideBar() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default SideBar;