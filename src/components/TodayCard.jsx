import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data.json';

// const parsed = JSON.parse(data);

const TodayCard = () => (
  <>
    <Card>
      <Card.Header as="h3">TODAY WEATHER</Card.Header>
      <Card.Body>
        <Card.Text>
          Current Temperature:{data.main.temp}
        </Card.Text>
        <Card.Text>
          Humidity: {data.main.humidity}
        </Card.Text>
        {/* <Card.Text>
          Precipitation:
        </Card.Text>
        <Card.Text>
          Current Status:
        </Card.Text> */}
      </Card.Body>
    </Card>
  </>
);

export default TodayCard;
