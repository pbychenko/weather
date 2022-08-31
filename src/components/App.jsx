import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import CityInput from './CityInput.jsx';

// const baseUrl = 'https://api.openweathermap.org/data';
// const cities = ['almaty', 'moscow', 'minsk', 'kiev'];

const App = () => {
  // const [items, setItems] = useState([]);
  // const [activePictureData, setActivePictureData] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const [showErrorBlock, setShowErrorBlock] = useState(false);
  // const [form, setForm] = useState({ name: '', comment: '' });

  // const getDataRequest = async () => {
  //   const uri = baseUrl;
  //   try {
  //     const res = await axios.get(uri);
  //     setItems(res.data);
  //   } catch (error) {
  //     setShowErrorBlock(true);
  //     throw error;
  //   }
  // };

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

  // useEffect(() => {
  //   getDataRequest();
  // }, []);

  // const handleClick = (id) => () => openCard(id);
  // const renderPictures = () => (
  //   items.map((el) => <Card key={el.id} src={el.url} onClickAction={handleClick(el.id)}/>)
  // );

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, comment } = form;
  //   const { id } = activePictureData;

  //   try {
  //     await axios.post(`${baseUrl}/${id}/comments`, { name, comment });
  //     setForm({ name: '', comment: '' });
  //     setShowModal(false);
  //   } catch (error) {
  //     setShowErrorBlock(true);
  //     throw error;
  //   }
  // };

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
  const [key, setKey] = useState('today');

  return (
    <>
      <Container>
        {/* <Tabs
          defaultActiveKey="home"
          // transition={false}
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          fill
        >
          <Tab eventKey="today" title="Погода сегодня"> */}
            <CityInput />
          {/* </Tab> */}
          {/* <Tab eventKey="future" title="Погода в будущем">
            <CityInput />
          </Tab> */}
      {/* </Tabs> */}
      </Container>
    </>
  );
};

export default App;
