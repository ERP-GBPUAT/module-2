import React, { useState } from 'react';
import { useReducer } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, application1: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const ApplicationDashboard = () => {
  const [{ loading, error, application1 }, dispatch] = useReducer(reducer, {
    loading: true,
    application1: [],
    error: '',
  });
  const [applications] = useState([
    {
      id: 1,
      name: 'John Doe',
      status: 'Approved',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'Pending',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      status: 'Rejected',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      name: 'Bob Williams',
      status: 'Pending',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]);
  /*useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get('', {
          header: {
            authorization: `Bearer ${token}`,
          },
        });    
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({type:'FETCH_FAIL',payload:err.message});
      }
    };    
    fetchData();
  });*/
  return (
    /* loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (*/
    <Container>
      <h1>Application Dashboard</h1>
      <p>Total Applications: {applications.length}</p>
      <div className="d-flex flex-wrap">
        {applications.map((application) => (
          <Card key={application.id} className="m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                <strong>{application.name}</strong>
              </Card.Title>
              <Card.Text>
                <strong>ID: {application.id}</strong>
                <br />
                <strong>Status:</strong>{' '}
                <Button
                  type="disabled"
                  size="sm"
                  variant={
                    application.status === 'Approved'
                      ? 'success'
                      : application.status === 'Rejected'
                      ? 'danger'
                      : 'warning'
                  }
                >
                  {application.status}
                </Button>
              </Card.Text>
              <LinkContainer to={`/print/${application.id}`}>
                <Button variant="primary">View Details</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ApplicationDashboard;
