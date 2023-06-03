import { useContext } from 'react';
import FormContext from 'context';
import { useNavigate } from 'react-router-dom';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';

const Tour = () => {
  const { data, setData } = useContext(FormContext);
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    console.log(data);
    navigate('/food');
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Container className="d-flex flex-column">
      <h3 className="text-center mt-4 text-bold">Enter Tour Details</h3>
      <Form onSubmit={handleFormSubmit}>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={3}>
            <Form.Group controlId="tour1">
              <Form.Label>Tour1</Form.Label>
              <Form.Control
                type="text"
                name="tour1"
                value={data.tour1}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="year1">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year1"
                value={data.year1}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lf1">
              <Form.Label>L.F. No.</Form.Label>
              <Form.Control
                type="text"
                name="lf1"
                value={data.lf1}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="amount1">
              <Form.Label>Amount Due</Form.Label>
              <Form.Control
                type="text"
                name="amount1"
                value={data.amount1}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="tour2">
              <Form.Label>Tour2</Form.Label>
              <Form.Control
                type="text"
                name="tour2"
                value={data.tour2}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="year2">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year2"
                value={data.year2}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lf2">
              <Form.Label>L.F. No.</Form.Label>
              <Form.Control
                type="text"
                name="lf2"
                value={data.lf2}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="amount2">
              <Form.Label>Amount Due</Form.Label>
              <Form.Control
                type="text"
                name="amount2"
                value={data.amount2}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="tour3">
              <Form.Label>Tour3</Form.Label>
              <Form.Control
                type="text"
                name="tour3"
                value={data.tour3}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="year3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year3"
                value={data.year3}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lf3">
              <Form.Label>L.F. No.</Form.Label>
              <Form.Control
                type="text"
                name="lf3"
                value={data.lf3}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="amount3">
              <Form.Label>Amount Due</Form.Label>
              <Form.Control
                type="text"
                name="amount3"
                value={data.amount3}
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
                navigate('/caution');
              }}
            >
              Prev
            </Button>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};
export default Tour;
