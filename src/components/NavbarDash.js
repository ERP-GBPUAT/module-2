import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gbpu from '../Images/gbpu.png';
import styles from './Navbar.module.css';
import person from '../Images/icons8-person-64.png';
import { Button, Nav } from 'react-bootstrap';
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
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Button
            variant="dark"
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          >
            <i className="fas fa-bars"></i>
          </Button>
          <img className={styles.navbarImg} src={gbpu} alt="GBPUAT" />
          <div>
            Govind Ballabh Pant University of Agriculture and Technology
          </div>
        </div>
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
                      <Nav.Link className="text-black">Basic Details</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer
                      to="/caution"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <Nav.Link className="text-black">Caution Refund</Nav.Link>
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
        </div>
        <div className={styles.authBtn}>
          {!localStorage.getItem('token') ? (
            <Link to="/login" className={styles.btn}>
              Login
            </Link>
          ) : (
            <></>
          )}
          {localStorage.getItem('token') ? (
            <div className={styles.profileBox}>
              <div onClick={handleMenu} className={styles.profileIcon}>
                <img src={person} alt="" />
              </div>
              {openMenu ? (
                <div className={styles.toggleMenu}>
                  <div className={styles.menuLogindetail}>
                    Signed in as <b>Udit</b>{' '}
                  </div>
                  <div onClick={handleProfile} className={styles.menuOption}>
                    Profile
                  </div>
                  <div className={styles.menuOption} onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarDash;
