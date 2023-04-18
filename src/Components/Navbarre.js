import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import './navbarre.css';
import { Link } from 'react-router-dom';
function Navbarre({settext, setrate}) {
  return (
    <div>



      <Navbar bg="light" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <img className="Img" src="https://img.freepik.com/free-vector/cinema-film-production-realistic-transparent-composition-with-isolated-image-clapper-with-empty-fields-vector-illustration_1284-66163.jpg?size=626&ext=jpg&ga=GA1.2.1503658521.1675759406&semt=ais" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><Link style={{textDecoration:"none", color:"black"}}to="/">Movies</Link></Nav.Link>
              <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"black"}} to="/about">About</Link> </Nav.Link>
              <Nav.Link href="#action1"><Link style={{textDecoration:"none", color:"black"}}to="/contact">Contact</Link></Nav.Link>
          
            </Nav>
            <ReactStars
              count={5}

              size={24}
              activeColor="yellow" onChange={(newrating)=>setrate(newrating)}
            />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>settext(e.target.value)}
              />
              <Button variant="outline-success" style={{ backgroundColor: "#c4d3e1", color: "black" }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbarre;