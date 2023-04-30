import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar className="navbar mb-5" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                <b> H O M E </b> &#160; &#160; &#160;
              </Nav.Link>
              <Nav.Link as={Link} to={"/menupage"}>
                M E N U &#160; &#160;
              </Nav.Link>
              <Nav.Link as={Link} to={"/drinks"}>
                C O C K T A I L S &#160; &#160;
              </Nav.Link>
            </Nav>
            <Navbar.Brand className="ms-auto">
              <h1>Mona Lisa Bistro</h1>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
