import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import HomePage from 'components/homePage';
import BasicDetails from 'components/new/BasicDetails';
import Caution from 'components/new/Caution';
import Food from 'components/new/Food';
import Tour from 'components/new/Tour';
import Status from 'components/status';
import Print from 'components/print';
import Dashboard from './Dashboard';
import { Button, Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import FormContext from 'context';
import {
  ArrowDropDown,
  Widgets,
  Notifications,
  CommentBankTwoTone,
} from '@mui/icons-material';
import { useEffect } from 'react';
function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(FormContext);
  const signoutHandler = () => {};
  useEffect(() => {
    // let Msg = document.getElementById("message");
    const recMsg = (e) => {
      e.preventDefault();
      // if (localStorage.getItem("token") && localStorage.getItem('token')!==undefined) return;
      console.log('data', e.data);
      if (!e.data.token) {
        return;
      }
      localStorage.setItem('token', e.data.token);
      localStorage.setItem('data', e.data.user);
    };
    window.addEventListener('message', recMsg);
    return () => {
      window.removeEventListener('message', recMsg);
    };
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <div
          className={
            sidebarIsOpen
              ? 'd-flex flex-column site-container active-cont'
              : 'd-flex flex-column site-container'
          }
        >
          {/* <header>
            <Navbar bg="primary" variant="dark" expand="lg">
              <Container>
                <Button
                  variant="dark"
                  onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                >
                  <i className="fas fa-bars"></i>
                </Button>
                <img
                  src="gbpu.png"
                  width="50px"
                  height="50px"
                  alt="gbplogo"
                ></img>
                <LinkContainer to="/">
                  <Navbar.Brand className="m-2">No Dues Module</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto w-100 justify-content-end">
                    {user ? (
                      <NavDropdown title={user.name} id="basic-nav-dropdown">
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    ) : (
                      <Link className="nav-link" to="/signin">
                        Sign In
                      </Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <div
            className={
              sidebarIsOpen
                ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
                : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
            }
          >
            <Nav className="d-flex flex-column justify-content-centre text-black w-100 p-100">
              <Nav.Item>
                <Box className="d-flex">
                  <IconButton>
                    <Widgets />
                  </IconButton>
                  <Typography variant="h5" fontWeight="bold">
                    Menu
                  </Typography>
                </Box>
              </Nav.Item>
              <Nav.Item>
                <Box className="d-flex" onClick={() => setToggle(!toggle)}>
                  <IconButton>
                    <ArrowDropDown />
                  </IconButton>
                  <Typography variant="h6" fontWeight="bold">
                    New Application
                  </Typography>
                </Box>
              </Nav.Item>
              {toggle &&
                (user?.isStudent ? (
                  <>
                    <Nav.Item>
                      <LinkContainer
                        to="/details"
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        <Nav.Link className="text-black">
                          Basic Details
                        </Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer
                        to="/caution"
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        <Nav.Link className="text-black">
                          Caution Refund
                        </Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer
                        to="/tour"
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        <Nav.Link className="text-black">Tour Details</Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer
                        to="/food"
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        <Nav.Link className="text-black">Food Details</Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                  </>
                ) : (
                  <Nav.Item>
                    <LinkContainer
                      to="/details"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <Nav.Link className="text-black">Basic Details</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                ))}
              <Nav.Item>
                <LinkContainer
                  to="/status"
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Box className="d-flex">
                    <IconButton>
                      <Notifications />
                    </IconButton>
                    <Typography variant="h6" fontWeight="bold">
                      Status
                    </Typography>
                  </Box>
                </LinkContainer>
              </Nav.Item>
              {user?.isFaculty && (
                <Nav.Item>
                  <LinkContainer
                    to="/dashboard"
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    <Box className="d-flex">
                      <IconButton>
                        <CommentBankTwoTone />
                      </IconButton>
                      <Typography variant="h6" fontWeight="bold">
                        Dashboard
                      </Typography>
                    </Box>
                  </LinkContainer>
                </Nav.Item>
              )}
            </Nav>
          </div> */}
          <main>
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details" element={<BasicDetails />} />
                <Route path="/caution" element={<Caution />} />
                <Route path="/food" element={<Food />} />
                <Route path="/tour" element={<Tour />} />
                <Route path="/status" element={<Status />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/print/:id" element={<Print />} />
              </Routes>
            </Container>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
