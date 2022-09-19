import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import routes from './routes';

const ForecastCard = ({ dayData }) => {
  const day = new Date((dayData.dt * 1000));
  return (
    <Card border="secondary" className='shadow'>
      <Card.Header as="h4" className='bg-info'>Forecast {day.toLocaleDateString()}</Card.Header>
      <Card.Body>
        <Image src={routes.getImagePath(dayData.weather[0].icon)} className='mx-auto d-block' />
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
