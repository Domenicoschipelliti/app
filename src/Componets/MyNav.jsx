import {
  Container,
  Navbar,
  Nav,
  Form,
  Row,
  Button,
  Col,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="ms-0">
            <img
              src={logo}
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="Netflix Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-light"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light active" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" href="#">
                TvShows
              </Nav.Link>
              <Nav.Link className="text-light" href="#">
                Movies
              </Nav.Link>
              <Nav.Link className="text-light" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-light" href="#">
                MyList
              </Nav.Link>
            </Nav>
            <Nav>
              <Form inline="true">
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Kids"
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit" className="me-3">
                      Cerca
                    </Button>
                  </Col>
                </Row>
              </Form>

              <NavDropdown
                title={<i className="bi bi-person-circle"></i>}
                className="bg-light h-25"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex">
        <h2 className="text-light ms-3 me-3">TvShows</h2>
        <NavDropdown title="Genres" className="text-light pt-2">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      </div>
    </>
  );
};

export default MyNavbar;
