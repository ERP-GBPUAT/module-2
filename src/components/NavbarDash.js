import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import {
  ArrowDropDown,
  CommentBankTwoTone,
  Notifications,
  Widgets,
} from '@mui/icons-material';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarDash = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const [openMenu, setOpenMenu] = React.useState(false);
  const logout = () => {
    localStorage.removeItem('data');
    localStorage.removeItem('token');
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const signoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
  };
  const user = JSON.parse(localStorage.getItem('data'));
  const handleProfile = () => {
    // fetchuserdata();
    // fetchUserDetails();
    // console.log(loggedUser);
    if (user.faculty) {
      navigate(`/`);
    }
    setOpenMenu(false);
  };
  const handleLogout = () => {
    logout();
    setOpenMenu(false);
  };
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Button
              variant="dark"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <i className="fas fa-bars"></i>
            </Button>
            <img src="gbpu.png" width="50px" height="50px" alt="gbplogo"></img>
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
        {/* <Nav className="d-flex flex-column justify-content-centre text-black w-100 p-100">
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
            </Nav> */}

        <div
          class="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style={{
            width: '280px',
            height: '115vh',
            boxShadow: '1px 1px 1px black',
          }}
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
            <span class="fs-4 text-bold">No dues</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li>
              <Link
                to={'/'}
                class="nav-link link-dark"
                onClick={() => setSidebarIsOpen(false)}
              >
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={'/dashboard'}
                class="nav-link link-dark"
                onClick={() => setSidebarIsOpen(false)}
              >
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                Student's Applications
              </Link>
            </li>
            <li>
              <Link
                to={'/details'}
                class="nav-link link-dark"
                onClick={() => setSidebarIsOpen(false)}
              >
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
                New Application
              </Link>
            </li>
            {/* <li>
              <Link
                to={'/status'}
                class="nav-link link-dark"
                onClick={() => setSidebarIsOpen(false)}
              >
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                Status
              </Link>
            </li> */}
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default NavbarDash;
