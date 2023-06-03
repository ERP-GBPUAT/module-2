import { useContext, useState } from 'react';
import FormContext from 'context';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const BasicDetails = () => {
  const [isBank, setIsBank] = useState(false);
  const navigate = useNavigate();
  const { data, setData } = useContext(FormContext);

  const handleFormSubmit = () => {
    console.log(data);
    navigate('/caution');
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Container className="d-flex flex-column">
      <h3 className="text-center mt-4">Enter Basic Details</h3>
      <div className="d-flex justify-content-between gap-20">
        <Button
          variant={isBank ? 'dark' : 'success'}
          type="button"
          onClick={() => setIsBank(false)}
        >
          Personal Details
        </Button>
        <Button
          variant={isBank ? 'success' : 'dark'}
          type="button"
          onClick={() => setIsBank(true)}
        >
          Bank Details
        </Button>
      </div>
      <Form onSubmit={handleFormSubmit}>
        {!isBank ? (
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={4}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  value={data.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="batch">
                <Form.Label>Batch</Form.Label>
                <Form.Control
                  type="text"
                  name="batch"
                  value={data.batch}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="department">
                <Form.Label>department</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  value={data.department}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="advisorName">
                <Form.Label>AdvisorName</Form.Label>
                <Form.Control
                  type="text"
                  name="advisorName"
                  value={data.advisorName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="hostelName">
                <Form.Label>HostelName</Form.Label>
                <Form.Control
                  type="text"
                  name="hostelName"
                  value={data.hostelName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  value={data.contact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6}>
              <Form.Group controlId="accountName">
                <Form.Label>AccountName</Form.Label>
                <Form.Control
                  type="text"
                  name="accountName"
                  value={data.accountName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="accountNumber">
                <Form.Label>AccountNumber</Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  value={data.accountNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="bankName">
                <Form.Label>BankName</Form.Label>
                <Form.Control
                  type="text"
                  name="bankName"
                  value={data.bankName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="bankBranch">
                <Form.Label>BankBranch</Form.Label>
                <Form.Control
                  type="text"
                  name="bankBranch"
                  value={data.bankBranch}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        )}
        <Row className="mt-4">
          <Col xs={12} md={4}>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default BasicDetails;
