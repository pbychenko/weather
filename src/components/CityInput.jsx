import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const CityInput = () => (
  <>
    <Image src='logo.png' height={144} width={144} className='mb-3' />
    <Form >
      <Row className="align-items-center">
        <Col sm={4}>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="city"
          />
        </Col>
        <Col sm={2}>
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
    </Row>
  </Form>
  </>
);

export default CityInput;
