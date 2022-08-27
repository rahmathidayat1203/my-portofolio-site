import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { faCode, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/style.css";
import landing from "../../assets/images/landing-picture.svg";
export const Navbars = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container expand="lg">
          <Navbar.Brand href="#home">
            <i>
              <FontAwesomeIcon icon={faCode} color="black" />
            </i>{" "}
            {props.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="#about">{props.menus[0]}</Nav.Link>
              <Nav.Link href="#portofolio">{props.menus[1]}</Nav.Link>
              <Nav.Link href="#contact">{props.menus[2]}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export const Jumbotron = (props) => {
  return (
    <>
      <div
        id="about"
        className="full-screen  justify-content-center align-items-center"
      >
        <Container>
          <Row>
            <Col lg="7" md="12" xs="12" className="align-items-center">
              <div className="about-text">
                <small className="small-text">
                  {props.firstTag}
                  <span className="mobile-block">{props.secondTag}</span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2">{props.greetingTag}</span>
                  <div className="animated-info">
                    <span className="animated-item">{props.skill[0]}</span>
                    <span className="animated-item">{props.skill[1]}</span>
                  </div>
                </h1>
                <p>{props.description}</p>
                <div className="custom-btn-group mt-4">
                  <a href="#download" className="btn mr-lg-2 custom-btn">
                    <i>
                      <FontAwesomeIcon icon={faFileAlt} pull="left" />
                    </i>
                    {props.buttonText[0]}
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="5" md="12" xs="12">
              <div className="about-image svg">
                <img src={landing} alt="landing-images"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
