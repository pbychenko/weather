import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import data from '../data.json';

// const parsed = JSON.parse(data);


const ForecastCard = () => (
  <>
    <Card>
      <Card.Header as="h3">Forecast</Card.Header>
      <Card.Body>
        <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
        <Card.Text>
          Maximum Temperature:
        </Card.Text>
        <Card.Text>
          Minimum Temperature:
        </Card.Text>
        <Card.Text>
          Humidity:
        </Card.Text>
        <Card.Text>
          Precipitation:
        </Card.Text>
        <Card.Text>
          Precipitation:
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default ForecastCard;
