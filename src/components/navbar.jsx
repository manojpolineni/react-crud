import 'bootstrap/dist/css/bootstrap.min.css';  
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';  
import { Link } from "react-router-dom";
import { IconName, VscAccount } from "react-icons/vsc";
import Logo from '../../src/assets/images/marcomm-test.png';
import {useSelector} from 'react-redux';

import moment from 'moment';
import '../App.css';
function NavBar() {  
  const today = new Date();
  const date = moment(today).format('DD MMM, YYYY');
  const state= useSelector((state)=>state.handleCart)

  return (  
    <Navbar className='bgclg' expand="md">  
      <Container >  
        <Navbar.Brand to="#home" className='px-0 py-0'>
          <img src={Logo} alt="logo" id="logo" className='logosize'  />
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="me-auto d-flex ">
            <ul>
              <li><Link to='/' className='active'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              {/* <li><Link to="/profile">Add Student</Link></li> */}
              <li><Link to="/edit">Add Data</Link></li>
              <li><Link to="/carthome">Products</Link></li>
              <li>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
                  <NavDropdown.Item><Link to="/carthome">Products</Link></NavDropdown.Item>  
                  <NavDropdown.Item Link to="/action">Dropdown Item 2</NavDropdown.Item>  
                  <NavDropdown.Item Link to="/action">Dropdown Item 3</NavDropdown.Item>  
                </NavDropdown>
              </li>
            </ul> 
          </Nav>
          <div className='buttons'>
            <Link to="/" className='btn btn-outline-dark'><i className='fa fa-sign-in me-1'></i>Login</Link>
            <Link to="/" className='btn btn-outline-dark ms-2'><i className='fa fa-user-plus me-1'></i>Register</Link>
            <Link to="/cart" className='btn btn-outline-dark ms-2'><i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})</Link>
          </div>
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
}  
export default NavBar;  