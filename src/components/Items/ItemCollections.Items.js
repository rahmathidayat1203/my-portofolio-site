import { Navbar, Container, Nav, Row, Col, Carousel } from "react-bootstrap";
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
              <Nav.Link href="#project">{props.menus[1]}</Nav.Link>
              <Nav.Link href="#contact">{props.menus[2]}</Nav.Link>
              <Nav.Link href="#resume">{props.menus[3]}</Nav.Link>
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

export const ContentsContents = (props) => {
  return (
    <>
      <div className="project py-5" id="project">
        <Container>
          <Row>
            <Col lg="11" className="text-center mx-auto" xs="12">
              <Col lg="8" className="mx-auto">
                <h2>{props.title}</h2>
              </Col>
              <Container className="carousels-container">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182e5624535%20text%20%7B%20fill%3A%23afafaf%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182e5624535%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      class="img-fluid"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>Projects Label 1</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182e5624537%20text%20%7B%20fill%3A%23aaaaaa%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182e5624537%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      class="img-fluid"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5>Projects Label 2</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182e5624539%20text%20%7B%20fill%3A%23a3a3a3%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182e5624539%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23e5e5e5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22278.3203125%22%20y%3D%22221.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      class="img-fluid"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5>Projects Label 3</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export const ContentsResume = () => {
  return (
    <>
      <div
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <h2 className="mb-4">Expriences</h2>
            </Col>
            <Col lg={6} xs={12}>
              <h2 className="mb-4 mobile-mt-2">Educations</h2>
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2018</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>SMA NEGERI 2 MARTAPURA</span>
                    </h3>
                    <p>
                      Ullamco qui cillum est ea amet pariatur adipisicing est.
                      Deserunt consectetur in qui ea nulla ullamco quis aliqua.
                      Laborum est in aliquip aute est sit proident. Sint
                      incididunt id laborum dolore irure aliqua.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2015</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>SMP NEGERI 1 MARTAPURA</span>
                    </h3>
                    <p>
                      Esse ut reprehenderit dolore deserunt incididunt velit
                      laborum qui velit. Nisi sint culpa voluptate et fugiat
                      proident laborum qui magna consectetur enim aute
                      consectetur. Cillum fugiat ea est cillum nulla et
                      proident. Duis pariatur veniam nostrud et et et elit culpa
                      sunt eiusmod tempor do enim. Amet magna est exercitation
                      laboris duis nisi amet ea in et.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2012</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>SD NEGERI 3 MARTAPURA</span>
                    </h3>
                    <p>
                      Aute nostrud laborum consectetur fugiat. Proident ad
                      incididunt ullamco aliqua in. Est id ex aute amet ex
                      pariatur laborum quis commodo duis. Ea pariatur ipsum
                      excepteur occaecat. Culpa veniam minim nisi exercitation
                      cupidatat eu eiusmod exercitation proident nostrud mollit
                      cillum pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <footer className="footer py-5">
        <Container>
          <Row>
            <Col lg="12" xs="12" className="text-center">
              <p clasName="copyright-text text-center">
                Copyright &copy; 2022 Rahmat Hidayat . All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
