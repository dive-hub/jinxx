import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Profiles } from '../utils/graphql_sample_data/data';
import { GetImageUrl } from '../utils/utils';
import { Image } from 'react-bootstrap';
import '../utils/styles/home.css';

function ProfileData({ person }) {
  // online or offline
  const status = {
    online: "Online",
    offline: "Not Available"
  };

  return (
    //Profile Card
    <Col className='container'>
    <Link to="/profile-id:name">
      <Image src={GetImageUrl(person)} alt={person.name} className='profile-image'/>
      <p>{person.name} is {status.online}</p>
      <div className="indicator"></div>
    </Link>
    </Col>
  );
}


function Home() {
  return (
    <>
    <Container fluid>
      <h2>African</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>Kenyan Sex Cams</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>Top Free Live Sex Cams</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>Couples Live Sex Cams</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>New & Trending Live Cam Girls</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>VR Cams</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>AI-Curated Picks</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <hr/>
      <h2>Featured Live Sex Shows</h2>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br />
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      <br/>
      <Row>
        {Profiles.map(person => (
          <ProfileData key={person.id} person={person} />
        ))}
      </Row>
      {/**To generate content from database */}
    </Container>
    <Outlet />
    </>
);
}
export default Home;