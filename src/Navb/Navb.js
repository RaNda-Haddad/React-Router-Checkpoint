import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function Navb() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://static.vecteezy.com/ti/vecteur-libre/p1/5538221-moderne-pop-corn-avec-paquet-logo-symbole-vecteur-icone-conception-graphique-illustration-vectoriel.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
              Movie App
          </Navbar.Brand>

        </Container>          
        <Nav className="me-auto">
            <Nav.Link href=""><Link to="/">Movies</Link></Nav.Link>
            <Nav.Link href=""><Link to="/Category">Category</Link></Nav.Link>
            <Nav.Link href=""><Link to="/Contact">Contact</Link></Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default Navb