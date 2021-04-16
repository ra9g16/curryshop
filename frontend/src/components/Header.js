import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand as={Link} to="/">ユアカレー</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/cart"><i className='fas fa-shopping-cart'></i>カート</Nav.Link>
                <Nav.Link as={Link} to="/login"><i className='fas fa-user'></i>サインイン</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>  
        </header>
    )
}

export default Header
