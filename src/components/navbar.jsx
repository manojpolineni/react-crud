import 'bootstrap/dist/css/bootstrap.min.css';  
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';  
import { Link } from "react-router-dom";
import Logo from '../../src/assets/images/marcomm-test.png';
import { BiSun, BiMoon, BiCart} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import React, { useState, useEffect} from 'react';
import { ThemeContext } from '../theme-context'

import moment from 'moment';
import '../App.css';


function NavBar() {  
  const items = JSON.parse(localStorage.getItem('items'));

  const today = new Date();
  const date = moment(today).format('DD MMM, YYYY');
  const state = useSelector((state) => state.handleCart)

  const { theme, toggle, dark } = React.useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(()=>{
    toggle(darkMode);
  },[darkMode]);
  
  return (  
    <Navbar className='bgclg' expand="md"  style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>  
      <Container >  
        <Navbar.Brand to="#home" className='px-0 py-0'>
         <Link to='/'><img src={Logo} alt="logo" id="logo" className='logosize' /></Link> 
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="me-auto d-flex ">
            <ul>
              <li><Link to='/' className='active'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to="/edit">Add Data</Link></li>
              <li><Link to="/carthome">Products</Link></li>
            </ul> 
          </Nav>
          <div className='buttons'>
            <Link to="/" className='btn btn-outline-dark'><i className='fa fa-sign-in me-1'></i>Login</Link>
            <Link to="/cart" className='btn btn-outline-dark ms-2'>
              <i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})
            </Link>
          </div>
          <Nav.Link 
            className={darkMode? 'text-dark-primary': 'text-light-primary'}
            onClick={()=>setDarkMode(!darkMode)}
          >
            {darkMode? <BiMoon size="1.7rem" /> : <BiSun size="1.7rem" />}
          </Nav.Link>
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
}  
export default NavBar;  