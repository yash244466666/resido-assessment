import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";
import Account from '../Account/Account';

function Navigation() {
    const [show, setShow] = useState(false);
    const AccountShowHandler = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white px-3 py-3 mt-3">
      <Container>
        <Link to='/'>
            <Navbar.Brand  className='bold'>MARKETPLACE.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <button onClick={AccountShowHandler}>
            <Nav className='nav-link nav-button black'>
            Account 
            </Nav>
          </button>
          {show ? <Account onCancel={handleClose} /> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation;