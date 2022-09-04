import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useFormik } from 'formik';

// const CityInput = ({ formData, onFormChange, onFormSubmit }) => (
//   <>
//     <Image src='logo.png' height={144} width={144} className='mb-3' />
//     <Form onSubmit={onFormSubmit}>
//       <Row className="align-items-center">
//         <Col sm={4}>
//           <Form.Control
//             className="mb-2"
//             name="city"
//             placeholder="city"
//             value = {formData.city}
//             onChange={onFormChange}
//           />
//         </Col>
//         <Col sm={2}>
//           <Button type="submit" className="mb-2">
//             Submit
//           </Button>
//         </Col>
//       </Row>
//     </Form>
//   </>
// );

const CityInput = ({ onFormSubmit }) => {
  const formik = useFormik({
    initialValues: {
      city: '',
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      console.log('formis', values);
      const { city } = values;
      try {
        await onFormSubmit(city);
        setSubmitting(false);
      } catch (er) {
        setSubmitting(true);
        setFieldError('connection', 'Ошибка сети');
        throw er;
      }
    },
  });

  return (
    <>
      <Image src='logo.png' height={144} width={144} className='mb-3' />
      <Form onSubmit={formik.handleSubmit}>
        <Row className="align-items-center">
          <Col sm={4}>
            <Form.Control
              className="mb-2"
              placeholder="city"
              {...formik.getFieldProps('city')}
            />
          </Col>
          <Col sm={2}>
            <Button type="submit" className="mb-2" disabled={formik.isSubmitting}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CityInput;
