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
import NavbarDash from 'components/NavbarDash';
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
          <NavbarDash />
          
          <main>
            {/* <Container> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details" element={<BasicDetails />} />
              <Route path="/caution" element={<Caution />} />
              <Route path="/food" element={<Food />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/status/:applicationId" element={<Status />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/print/:applicationId" element={<Print />} />
            </Routes>
            {/* </Container> */}
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
