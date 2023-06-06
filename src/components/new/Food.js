import { useContext } from 'react';
import FormContext from 'context';
import { useNavigate } from 'react-router-dom';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';

const Food = () => {
  const { data, setData } = useContext(FormContext); 
  const navigate = useNavigate();
  const handleFormSubmit = async(e) => {
    e.preventDefault()
    try {
        const res = await fetch("http://localhost:8080/nodues/applyNodue", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
      accountName: data.accountName,
      accountNumber: data.accountNumber,
      bankName: data.bankName,
      bankBranch: data.bankBranch,
      ledger: data.ledger,
      year: data.year,
      admissionFees: data.year,
      tutionFees: data.tutionFees,
      roomRent: data.roomRent,
      tourMoney: data.tourMoney,
      fine: data.fine,
      miscCharges: data.miscCharges,
      foodCharges: data.foodCharges,
      other: data.other,
      totalAmount: data.totalAmount,
      tour1: data.tour1,
      year1: data.year1,
      lf1: data.lf1,
      amount1: data.amount1,
      tour2: data.tour2,
      year2: data.year2,
      lf2: data.lf2,
      amount2: data.amount2,
      tour3: data.tour3,
      year3: data.year3,
      lf3: data.lf3,
      amount3: data.amount3,
      foodAdvance: data.foodAdvance,
      foodCharges2: data.foodCharges2,
      other2: data.other2,
      balance: data.balance,
        }),
      });
      const json =await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
    navigate('/');
    // console.log({
    //   name: data.name,
    //   id: data.id,
    //   batch: data.batch,
    //   department: data.department,
    //   accountName: data.accountName,
    //   accountNumber: data.accountNumber,
    //   bankName: data.bankName,
    //   bankBranch: data.bankBranch,
    //   ledger: data.ledger,
    //   year: data.year,
    //   admissionFees: data.year,
    //   tutionFees: data.tutionFees,
    //   roomRent: data.roomRent,
    //   tourMoney: data.tourMoney,
    //   fine: data.fine,
    //   miscCharges: data.miscCharges,
    //   foodCharges: data.foodCharges,
    //   other: data.other,
    //   totalAmount: data.totalAmount,
    //   tour1: data.tour1,
    //   year1: data.year1,
    //   lf1: data.lf1,
    //   amount1: data.amount1,
    //   tour2: data.tour2,
    //   year2: data.year2,
    //   lf2: data.lf2,
    //   amount2: data.amount2,
    //   tour3: data.tour3,
    //   year3: data.year3,
    //   lf3: data.lf3,
    //   amount3: data.amount3,
    //   foodAdvance: data.foodAdvance,
    //   foodCharges2: data.foodCharges2,
    //   other2: data.other2,
    //   balance: data.balance,
    // });
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
