import Container from 'react-bootstrap/Container';
import {Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to={'/'}>
        <Navbar.Brand to="/">MyStore</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Features</Nav.Link>
            <Nav.Link to="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/"><i className="fa-solid fa-cart-shopping"></i>   Cart</Nav.Link>
            <Nav.Link eventKey={2} to="/">
            <i className="fa-solid fa-user"></i>   Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;