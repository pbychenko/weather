import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CityInput from './CityInput.jsx';
import TodayCard from './TodayCard.jsx';
import ForeCast from './ForeCast.jsx';


const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=43.25&lon=76.95&units=metric&appid=${token}`;

// const cities = ['almaty', 'moscow', 'minsk', 'kiev'];

const App = () => {
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);
  const [coords, setCoords] = useState({ lat: '', lon: '' });
  // const [activePictureData, setActivePictureData] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const [showErrorBlock, setShowErrorBlock] = useState(false);
  const [form, setForm] = useState({ city: '' });

  const getDataRequest = async () => {
    try {
      const res = await axios.get(baseUrl);
      setCurrent(res.data.current);
      setDaily(res.data.daily);
    } catch (error) {
      // setShowErrorBlock(true);
      console.log(error);
      throw error;
    }
  };

  // const openCard = async (id) => {
  //   const uri = baseUrl + (id ? `/${id}` : '');
  //   try {
  //     const res = await axios.get(uri);
  //     setActivePictureData(res.data);
  //     setShowModal(true);
  //   } catch (error) {
  //     setShowErrorBlock(true);
  //     throw error;
  //   }
  // };

  useEffect(() => {
    getDataRequest();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { city } = form;
    const baseUrl2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}ы&appid=${token}`;
    try {
      const res = await axios.get(baseUrl2);
      console.log(res)
      // setCurrent(res.data.current);
      // setDaily(res.data.daily);
      setForm({ city: '' });
      // setShowModal(false);
    } catch (error) {
      console.log(error);
      // setShowErrorBlock(true);
      throw error;
    }
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setForm({ name: '', comment: '' });
  // };

  // const renderModal = () => (
  //   activePictureData && <MyModal
  //     show={showModal}
  //     data={activePictureData}
  //     onFormChange={handleChange}
  //     onFormSubmit={handleSubmit}
  //     formData={form}
  //     onHide={handleCloseModal}
  //   />
  // );
  // console.log('requestState');

  // if (showErrorBlock) {
  //   return (
  //     <Alert variant='info' className="text-center">
  //       Something wrong with newtwork please try later
  //     </Alert>
  //   );
  // }
  // const [key, setKey] = useState('today');

  // console.log(current);
  // console.log(daily);

  return (
    <>
      <Container>
        <CityInput onFormChange={handleChange}
          onFormSubmit={handleSubmit}
          formData={form}
        />
        {current !== null ? (<TodayCard data={current}/>) : null}
        {daily !== [] ? (<ForeCast data={daily}/>) : null}
      </Container>
    </>
  );
};

export default App;
