import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/CustomNavbar.scss';
const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className='p-2 upper-nav' sticky="top">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-row custom-nav">
            <Nav.Link href="/#projects"><span className="navlink">Projects</span></Nav.Link>
            <Nav.Link href="/#experience"><span className="navlink">Design Experience</span></Nav.Link>
            <Nav.Link href="/#clubs"><span className="navlink">Clubs/Orgs</span></Nav.Link>
            <Nav.Link href="/#coursework"><span className="navlink">Coursework</span></Nav.Link>
            <Nav.Link href="/#skills"><span className="navlink">Skills</span></Nav.Link>
            <Nav.Link href="/#work"><span className="navlink">Work Experience</span></Nav.Link>
            <Nav.Link href="/#education"><span className="navlink">Education</span></Nav.Link>
            <Nav.Link href="/#contact"><span className="navlink">Contact</span></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
  );
}

export default CustomNavbar