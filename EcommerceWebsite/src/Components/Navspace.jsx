import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi'; // Using the GiHamburgerMenu icon as an example
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import './Navbar.css'

const Navspace = () => {
  return (
    <Navbar bg="" id='navcolor' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand  id='vstore'>VS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu style={{color:'black'}}/> {/* Navigation icon */}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" >
       
              <Form className="d-flex align-items-center"> {/* Added align-items-center to center-align items */}
            <div className="search-icon">
              <FaSearch className="search-icon-inner" /> {/* Search icon inside input */}
            </div>
            <Form.Control type="search" placeholder="Search" aria-label="Search" className="search-input" />
          </Form>
          
             <div className="img">
             <img src='logo6.jpg' style={{marginLeft:'100px'}}/>
             </div>
          <Nav className="ml-auto" >
            <Nav.Link  className='link' href="#about">REGISTER</Nav.Link>
            <Nav.Link  className='link' href="#services">SIGN IN</Nav.Link>
            <Nav.Link  className='link' href="#home">CONTACT AS</Nav.Link>

           
           
          </Nav>
          <FaShoppingCart style={{fontSize:'30px', marginLeft:'100px'}} />
      <Badge bg="danger"></Badge>

                     
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
};

export default Navspace;
