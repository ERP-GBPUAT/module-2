import { useContext } from 'react';
import FormContext from 'context';
import { useNavigate } from 'react-router-dom';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';

const Food = () => {
  const { data, setData } = useContext(FormContext);
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    console.log(data);
    navigate('/');
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Container className="d-flex flex-column">
      <h3 className="text-center mt-4 text-bold">Enter Food Details</h3>
      <Form onSubmit={handleFormSubmit}>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <Form.Group controlId="foodAdvance">
              <Form.Label>FoodAdvance</Form.Label>
              <Form.Control
                type="text"
                name="foodAdvance"
                value={data.foodAdvance}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="foodCharges2">
              <Form.Label>FoodCharges</Form.Label>
              <Form.Control
                type="text"
                name="foodCharges2"
                value={data.foodCharges2}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="other2">
              <Form.Label>Other Dues</Form.Label>
              <Form.Control
                type="text"
                name="other2"
                value={data.other2}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="balance">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="text"
                name="balance"
                value={data.balance}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <div className="d-flex justify-content-between gap-20">
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                navigate('/tour');
              }}
            >
              Prev
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};
export default Food;
