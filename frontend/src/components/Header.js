import Container from 'react-bootstrap/Container';
import {Nav,Navbar} from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><i className="fa-solid fa-cart-shopping"></i>   Cart</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <i className="fa-solid fa-user"></i>   Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;