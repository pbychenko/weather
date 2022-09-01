import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const ForecastCard = ({ dayData }) => {
  const day = new Date((dayData.dt * 1000));
  return (
    <Card>
      <Card.Header as="h3">Forecast {day.toLocaleDateString()}</Card.Header>
      <Card.Body>
        <Image src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`} className='mx-auto d-block' />
        <Card.Text>
          Maximum Temperature:  {dayData.temp.max}
        </Card.Text>
        <Card.Text>
          Minimum Temperature: {dayData.temp.min}
        </Card.Text>
        <Card.Text>
          Humidity: {dayData.humidity}
        </Card.Text>
      </Card.Body>
    </Card>);
};

export default ForecastCard;
