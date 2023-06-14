import React, { useState } from 'react'

// import { Link, useNavigate } from 'react-router-dom';


import { BsList } from 'react-icons/bs';
 import { CiDeliveryTruck} from "react-icons/ci";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonPlus } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";
import { FiLogOut,FiUsers } from "react-icons/fi";
import { BiBookAdd } from "react-icons/bi";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { useEffect } from "react";
import { contextwrap } from "../App";
import { useContext } from "react";

// import axios from 'axios';
// import { Form } from 'react-bootstrap';

function Navbar1() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { pass } = useContext(contextwrap);
  const [dash, setdash] = pass;
  const navigate = useNavigate();
  const Logout = () => {
    const user = localStorage.removeItem("user");
    navigate(user ? "/" : "/");
    setdash(false);
    setShow(false);
  };


  // const [books, setBooks] = useState([]);
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const searchQuery = e.target.value;
  //   axios.get(`http://localhost:4000/project/displaybooks?search=${searchQuery}`)
  //     .then((res) => {
  //       setBooks(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };


  // const navbar =useNavigate();
  // const logout =() => {
  //   localStorage.removeItem("user");
  //   navbar("/");
  // }
  return (
   <div>
 <Navbar expand="lg"  className=  {dash === true ? "d-visible navbar-bg" : "d-none navbar-bg" } >
      <Container fluid>
        <Navbar.Brand href="/" className=''>
          {/* <img
            src={logo}
            alt="logo"
            className={dash === true ? "d-visible logo" : "d-none logo"}
          /> */}
          <h1>Bookos</h1>
    
        </Navbar.Brand>

            {/* <Nav.Link >
            <Link style={{color: 'black'}} to="/account" >Account</Link>
            </Nav.Link> */}
            <Nav.Link> 
            <Link style={{color: 'black'}} to="/signup">Signup</Link>
            </Nav.Link>
            <Nav.Link >
            <Link style={{color: 'black'}} to="/login">Login</Link>
            </Nav.Link>

            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button variant="outline-success">Search</Button>
            <ul>
        {books.map((book) => (
          <li key={book.author}>{book.category}</li>
        ))}
      </ul>
          </Form> */}


            {/* <Nav.Link> 
            <Link style={{color: 'black'}} to="/orders">orders</Link>
            </Nav.Link> */}
        <Nav className="ms-auto align-items-center navbar-menu">
       
   


          <Nav.Link className={dash === true ? "d-visible" : "d-none"}>
            <button onClick={handleShow} className="btn-menu">
             < BsList />
            </button>
          </Nav.Link>

          <Offcanvas  style={{width:'33%'}}
            show={show}
            onHide={handleClose}
            className="offcanvas-menu"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='dropdown-item text-success' > 
                <Button
                  className="p-0"
                  onClick={() => {
                    navigate("/");
                    setShow(false);
                  }}
                >
                  {/* <img src={logo} alt="logo" className="logo" /> */}
                </Button>
                <h1>Bookos</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
        <a className='dropdown-item text-success' href="/books"><TbBooks />Books</a>
        <a className='dropdown-item text-success' href="/addbooks"><BiBookAdd />Create Books</a>

        <a className='dropdown-item text-success' href="/client"><FiUsers />Client</a>
        <a className='dropdown-item text-success' href="/create-client"><BsPersonPlus />Create Client</a>
        {/* <a className='dropdown-item text-success' href="/create-customer">create Customer</a>
        <a className='dropdown-item text-success' href="/customer"> Customer</a> */}
        <a className='dropdown-item text-success' href="/teams"><FiUsers /> Teams</a>
        <a className='dropdown-item text-success' href="/team-create"><BsPersonPlus /> Createteam</a>

        <a className='dropdown-item text-success' href="/orders"><CiDeliveryTruck /> Orders</a>
        <a className='dropdown-item text-success' href="/place-order"><CiDeliveryTruck /> placeOrders</a>


        <Button className="btn" onClick={Logout}>
                    <FiLogOut className="me-2" />
                    Logout
        </Button>
        </Offcanvas.Body>
           
          </Offcanvas>
        </Nav>
      </Container>
    </Navbar>

        {/* <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand style={{color:'cadetblue'}} href="/" >Bookos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
            <Link style={{color: 'black'}} to="/account" >Account</Link>
            </Nav.Link>
            <Nav.Link >
            <Link style={{color: 'black'}} to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link> 
            <Link style={{color: 'black'}} to="/signup">Signup</Link>
            </Nav.Link>
            <Button style={{backgroundColor:'cadetblue'}} onClick={logout} >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar> */}



    </div>
  )
}

export default Navbar1