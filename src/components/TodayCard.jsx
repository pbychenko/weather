import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import routes from './routes';

const TodayCard = ({ data }) => (
  <>
    <Card border="secondary" className='shadow mb-5 w-50 mt-5' >
      <Card.Header as="h3" className='bg-info text-center'>Today weather</Card.Header>
      <Card.Body>
        <Container>
          <Row className='d-flex justify-content-around'>
            <Col sm={4}>
              <Card.Text>
                Current Temperature:{data.temp}
              </Card.Text>
              <Card.Text>
                Feels like: {data.feels_like}
              </Card.Text>
              <Card.Text>
                Humidity: {data.humidity}
              </Card.Text>
            </Col>
            <Col sm={4}>
              <Card.Text>
                Pressure: {data.pressure}
              </Card.Text>
              <Card.Text>
                Wind speed: {data.wind_speed}
              </Card.Text>
              <Card.Text>
                <Image src={routes.getImagePath(data.weather[0].icon)} />
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  </>
);

export default TodayCard;
