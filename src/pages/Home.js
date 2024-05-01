import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Nav } from 'react-bootstrap';
import { Profiles } from '../utils/neo4js_sample_data/data';
import { GetImageUrl } from '../utils/utils';

function ProfileData({ person }) {

  return (
    //Profile Card
    <Col>
    <Nav.Link>
      <img
        src={GetImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </Nav.Link>
    </Col>
  );
}


function Home() {
  return (
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
);
}
export default Home;