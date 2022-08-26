import { Navbar, Container, Nav } from "react-bootstrap";
import {} from "@fortawesome/fontawesome-svg-core";
export const Button = () => {};
export const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container expand="lg">
          <Navbar.Brand href="#home">Rahmat Hidayat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portofolio">Portofolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export const Jumbotron = () => {
  return (
    <>
      <div className="full-screen">
        <h1>Hello World</h1>
      </div>
    </>
  );
};
