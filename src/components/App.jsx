import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import CityInput from './CityInput.jsx';
import ForeCast from './ForeCast.jsx';
import TodayCard from './TodayCard.jsx';
import routes from './routes';

const App = () => {
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);
  const [errorBlock, setErrorBlock] = useState('');

  const getDataRequest = async (lat, lon) => {
    const url = routes.getWeatherDataPath(lat, lon);
    const res = await axios.get(url);
    setCurrent(res.data.current);
    
    setDaily(res.data.daily);
  };

  const handleSubmit = async (city) => {
    const url = routes.getGeoCodingPath(city);
    try {
      const resposeData = (await axios.get(url)).data[0];
      if (resposeData) {
        const { lat, lon } = resposeData;
        await getDataRequest(lat, lon);
        setErrorBlock('');
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
