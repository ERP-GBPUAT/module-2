import FormContext from 'context';
import { useContext } from 'react';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Caution = () => {
  const { data, setData } = useContext(FormContext);
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    console.log(data);
    navigate('/tour');
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Container className="d-flex flex-column">
      <h3 className="text-center mt-4 text-bold">Caution Money Refund Memo</h3>
      <Form onSubmit={handleFormSubmit}>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={3}>
            <Form.Group controlId="ledger">
              <Form.Label>Ledger</Form.Label>
              <Form.Control
                type="text"
                name="ledger"
                value={data.ledger}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={data.year}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="admissionFee">
              <Form.Label>AdmissionFee</Form.Label>
              <Form.Control
                type="text"
                name="admissionFee"
                value={data.admissionFee}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="tutionFees">
              <Form.Label>TutionFees</Form.Label>
              <Form.Control
                type="text"
                name="tutionFees"
                value={data.tutionFees}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="roomRent">
              <Form.Label>RoomRent</Form.Label>
              <Form.Control
                type="text"
                name="roomRent"
                value={data.roomRent}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="tourMoney">
              <Form.Label>TourMoney</Form.Label>
              <Form.Control
                type="text"
                name="tourMoney"
                value={data.tourMoney}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="fine">
              <Form.Label>fine</Form.Label>
              <Form.Control
                type="text"
                name="fine"
                value={data.fine}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="miscCharges">
              <Form.Label>MiscCharges</Form.Label>
              <Form.Control
                type="text"
                name="miscCharges"
                value={data.miscCharges}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="foodCharges">
              <Form.Label>FoodCharges</Form.Label>
              <Form.Control
                type="text"
                name="foodCharges"
                value={data.foodCharges}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="other">
              <Form.Label>Others</Form.Label>
              <Form.Control
                type="text"
                name="other"
                value={data.other}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="totalAmount">
              <Form.Label>TotalAmount</Form.Label>
              <Form.Control
                type="text"
                name="totalAmount"
                value={data.totalAmount}
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
                navigate('/details');
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

export default Caution;
