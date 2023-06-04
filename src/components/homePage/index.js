import React, { useReducer, useEffect } from 'react';
import './FacultyProfile.css';
import MainDashboard from '../MainDashboard';
import { useLocation, useParams } from 'react-router-dom';
import NavbarDash from '../NavbarDash';
// import AddResearchForm from "./AddResearchForm";
// import AllResearchList from "./AllResearchList";

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
        <>Loading...</>
      ) : (
        <div className="main-content">
          <MainDashboard data={data} />
        </div>
      )}
    </>
    // <div className="main-content">
    //   <nav
    //     className="navbar navbar-top navbar-expand-md navbar-dark"
    //     id="navbar-main"
    //   >
    //     <div className="container-fluid">
    //       <a
    //         className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
    //         href="https://www.creative-tim.com/product/argon-dashboard"
    //         target="_blank"
    //       >
    //         User profile
    //       </a>
    //       {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
    //         <div className="form-group mb-0">
    //           <div className="input-group input-group-alternative">
    //             <div className="input-group-prepend">
    //               <span className="input-group-text">
    //                 <i className="fas fa-search"></i>
    //               </span>
    //             </div>
    //             <input
    //               onChange={handleChange}
    //               className="form-control"
    //               placeholder="Search"
    //               type="text"
    //             />
    //           </div>
    //         </div>
    //       </form> */}
    //       <ul className="navbar-nav align-items-center d-md-flex">
    //           <li className="nav-item dropdown">
    //             <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               <div className="media align-items-center">
    //                 <span className="avatar avatar-sm rounded-circle">
    //                   <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"/>
    //                 </span>
    //                 <div className="media-body ml-2 d-none d-lg-block">
    //                   <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
    //                 </div>
    //               </div>
    //             </a>
    //             <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
    //               <div className=" dropdown-header noti-title">
    //                 <h6 className="text-overflow m-0">Welcome!</h6>
    //               </div>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-single-02"></i>
    //                 <span>My profile</span>
    //               </a>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-settings-gear-65"></i>
    //                 <span>Settings</span>
    //               </a>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-calendar-grid-58"></i>
    //                 <span>Activity</span>
    //               </a>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-support-16"></i>
    //                 <span>Support</span>
    //               </a>
    //               <div className="dropdown-divider"></div>
    //               <a href="#!" className="dropdown-item">
    //                 <i className="ni ni-user-run"></i>
    //                 <span>Logout</span>
    //               </a>
    //             </div>
    //           </li>
    //         </ul>
    //     </div>
    //   </nav>
    // </div>
    //     <>
    //     <div className="main-content">
    //     <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
    //       <div className="container-fluid">
    //         <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">User profile</a>
    //         <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
    //           <div className="form-group mb-0">
    //             <div className="input-group input-group-alternative">
    //               <div className="input-group-prepend">
    //                 <span className="input-group-text"><i className="fas fa-search"></i></span>
    //               </div>
    //               <input onChange={handleChange} className="form-control" placeholder="Search" type="text"/>
    //             </div>
    //           </div>
    //         </form>

    //       </div>
    //     </nav>
    //     {/* header */}

    //     {/* <!-- Page content --> */}

    //   </div>
    //   <footer className="footer">
    //     <div className="row align-items-center justify-content-xl-between">
    //       <div className="col-xl-6 m-auto text-center">
    //         <div className="copyright">
    //           <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">Argon Dashboard</a> by Creative Tim</p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   </>
  );
};

export default HomePage;

// import { IconButton, Typography } from '@mui/material';
// import { AccountCircleOutlined } from '@mui/icons-material';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import FormContext from 'context';
// import { useContext } from 'react';
// const HomePage = () => {
//   const user1 = {
//     id: '123456',
//     name: 'John Doe',
//     branch: 'Computer Science',
//     batch: '2022',
//   };
//   const { user } = useContext(FormContext);
//   return (
//     <Container>
//       <Row className="justify-content-center mt-4">
//         <Col xs={12} md={6}>
//           <div className="text-center">
//             <IconButton>
//               <AccountCircleOutlined sx={{ width: '150px', height: '150px' }} />
//             </IconButton>
//             <Typography variant="h5" fontWeight="bold">
//               {user?.user?.isStudent ? 'Student' : 'Faculty'}
//             </Typography>
//           </div>
//           <Card className="text-center border-dark">
//             <Card.Body>
//               <Card.Title>User Details</Card.Title>
//               <Card.Text>
//                 <strong>ID:</strong> {user1.id}
//                 <br />
//                 <strong>Name:</strong> {user1.name}
//                 <br />
//                 <strong>
//                   {user?.user?.isStudent ? 'Branch' : 'Department'}:
//                 </strong>{' '}
//                 {user1.branch}
//                 <br />
//                 <strong>
//                   {user?.user?.isStudent ? 'Batch' : 'Designation'}:
//                 </strong>{' '}
//                 {user1.batch}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;
