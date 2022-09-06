import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import CityInput from './CityInput.jsx';
import TodayCard from './TodayCard.jsx';
import ForeCast from './ForeCast.jsx';

const token = process.env.APD_KEY;

const App = () => {
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);
  const [errorBlock, setErrorBlock] = useState('');

  const getDataRequest = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${token}`;
    const res = await axios.get(url);
    setCurrent(res.data.current);
    setDaily(res.data.daily);
  };

  const handleSubmit = async (city) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${token}`;
    try {
      const resposeData = (await axios.get(url)).data[0];
      if (resposeData) {
        const { lat, lon } = resposeData;
        await getDataRequest(lat, lon);
      } else {
        setErrorBlock('incorrect city');
        setCurrent(null);
        setDaily([]);
      }
    } catch (error) {
      setErrorBlock('Something wrong with newtwork please try later');
      throw error;
    }
  };

  console.log('test 1', process.env.NODE_ENV);

  return (
    <>
      <Container>
        <CityInput onFormSubmit={handleSubmit} />
        {errorBlock !== '' ? (<Alert variant='info' className="text-center">{errorBlock}</Alert>) : null}
        {current !== null ? (<TodayCard data={current}/>) : null}
        {daily !== [] ? (<ForeCast data={daily}/>) : null}
      </Container>
    </>
  );
};

export default App;
