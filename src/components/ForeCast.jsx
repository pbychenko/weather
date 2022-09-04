import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ForecastCard from './ForecastCard.jsx';

const ForeCast = ({ data }) => (
  <>
    <h1 className='text-center'>FORECAST</h1>
    <Container>
      <Row className="align-items-center">
        {data.map((dayData) => <Col key={dayData.dt} sm={3} className='mb-3'><ForecastCard dayData={dayData} /></Col>)}
      </Row>
    </Container>
  </>
);

export default ForeCast;