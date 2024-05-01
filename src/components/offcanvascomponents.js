import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { BsHouseDoorFill, BsPhone, BsMagic, BsLightningChargeFill, BsFillHandThumbsUpFill, BsSuitHeartFill, BsChatHeartFill } from "react-icons/bs";
import { BiHistory } from 'react-icons/bi';
import { GiRabbitHead } from "react-icons/gi";
import { FiRss } from "react-icons/fi";
import { Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasComponets() {
    return (
        <>
        <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link >
            <Link to="/" style={{ textDecoration: 'none', color: 'match-parent'}} ><BsHouseDoorFill /> Home</Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/discover" style={{ textDecoration: 'none'}} ><FiRss />Feed</Link>
            </Nav.Link>
            <Nav.Link > <Link to="/girls/recommended" style={{ textDecoration: 'none'}} >
                <BsFillHandThumbsUpFill />Recommended</Link>
            </Nav.Link>
            <Nav.Link > <Link to="/favorites" style={{ textDecoration: 'none'}} >
                <BsSuitHeartFill />My Favorites
                </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/girls/best" style={{ textDecoration: 'none'}} >
                <BsChatHeartFill />Best of Privates
                </Link></Nav.Link>
            <Nav.Link >
            <Link to="/watchhistory" style={{ textDecoration: 'none'}} >
            <BiHistory />Watch History
                </Link></Nav.Link>
            <hr/>
            <div>Speacials</div>
            <Nav.Link ><BsFillHandThumbsUpFill />Ukraine</Nav.Link>
            <Nav.Link ><BsFillHandThumbsUpFill />Kenya</Nav.Link>
            <Nav.Link ><BsLightningChargeFill />New Models</Nav.Link>
            <Nav.Link >
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor"
                class="bi bi-badge-vr" viewBox="0 0 16 16">
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                    <path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95z"/>
                </svg>VR Cams</Nav.Link>
            <Nav.Link><BsMagic />Flirting</Nav.Link>
            <Nav.Link><GiRabbitHead />BMSD</Nav.Link>
            <hr />
            <div>Age</div>
            <hr />
            <div>ETHNICITY</div>
            
            <hr />
            <div>BODY TYPE</div>

            <hr />
            <div>HAIR</div>
            
            <hr />
            <div>PRIVATE SHOWS</div>
            
            <hr />
            <div>POPULAR</div>
            <Nav.Link href="#" ><BsPhone />Mobile</Nav.Link>
        </Nav>
        </Offcanvas.Body>
        <Outlet/>
    </>
);}

export default OffCanvasComponets;