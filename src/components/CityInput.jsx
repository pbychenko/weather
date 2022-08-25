import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CityInput = () => (
  <Form>
    <Row className="align-items-center">
			<Col sm={8}>
				<Form.Label htmlFor="inlineFormInput" visuallyHidden>
					Name
				</Form.Label>
				<Form.Control
					className="mb-2"
					id="inlineFormInput"
					placeholder="Jane Doe"
				/>
			</Col>
			<Col sm={4}>
				<Button type="submit" className="mb-2">
					Submit
				</Button>
			</Col>
		</Row>
	</Form>
);

export default CityInput;
