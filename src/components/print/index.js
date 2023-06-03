import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import FormContext from 'context';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, userDetail: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const ApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(FormContext);

  const [{ loading, error, userDetail }, dispatch] = useReducer(reducer, {
    loading: true,
    userDetail: {},
    error: '',
  });
  const updateStatus = async (e) => {
    try {
      /*const { data } = await axios.post(
        '',
        { status: e.etarget.value },
        {
          header: {
            authorization: `Bearer ${token}`,
          },
        }
      );*/
    } catch (err) {
      console.log(err);
    }
    console.log(e.target.value);
    navigate('/dashboard');
  };
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
  const userDetails = {
    name: 'John Doe',
    id: '12345',
    branch: 'Computer Science',
    batch: '2023',
    college: 'ABC University',
  };

  return (
    /* loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (*/
    <Container>
      <h1>Application Page</h1>
      <Card className="text-center border-dark">
        <Card.Body>
          <Card.Title>
            <strong>User Details</strong>
          </Card.Title>
          <Card.Text>
            {Object.entries(userDetails).map(([key, value]) => (
              <span key={key}>
                <strong>{key}: </strong> {value}
                <br />
              </span>
            ))}
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Button
              variant="danger"
              type="button"
              value="Rejected"
              onClick={updateStatus}
            >
              Rejected
            </Button>
            <Button
              variant="success"
              type="button"
              value="Approved"
              onClick={updateStatus}
            >
              Approved
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ApplicationPage;
