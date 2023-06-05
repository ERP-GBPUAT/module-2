import React, { useReducer, useEffect } from 'react';
import './FacultyProfile.css';
import MainDashboard from '../MainDashboard';
import { useLocation } from 'react-router-dom';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_BEGIN':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
  }
};

const HomePage = () => {
  const location = useLocation();
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    data: {},
  });

  useEffect(() => {
    const fetchFaculty = async (facultyId) => {
      dispatch({ type: 'FETCH_BEGIN' });
      try {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: JSON.parse(localStorage.getItem('data')),
        });
        console.log('userr', data);
      } catch (error) {
        console.log(error);
        dispatch({ type: 'FETCH_FAIL', payload: error.msg });
      }
    };
    fetchFaculty();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="main-content">
          <MainDashboard data={data} />
        </div>
      )}
    </>
  );
};

export default HomePage;
