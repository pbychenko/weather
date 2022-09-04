import React from 'react';
import Card from 'react-bootstrap/Card';

const TodayCard = ({ data }) => (
  <>
    <Card>
      <Card.Header as="h3">TODAY WEATHER</Card.Header>
      <Card.Body>
        <Card.Text>
          Current Temperature:{data.temp}
        </Card.Text>
        <Card.Text>
          Humidity: {data.humidity}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default TodayCard;
