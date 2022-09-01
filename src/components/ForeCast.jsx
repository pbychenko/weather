import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ForecastCard from './ForecastCard.jsx';

const ForeCast = () => (
  <>
    <h1>FORECAST</h1>
    <Container>
      <Row className="align-items-center">
          <Col sm={4}>
            <ForecastCard />
          </Col>
          <Col sm={4}>
            <ForecastCard />
          </Col>
          <Col sm={4}>
            <ForecastCard />
          </Col>
      </Row>
    </Container>
  </>
);

export default ForeCast;
