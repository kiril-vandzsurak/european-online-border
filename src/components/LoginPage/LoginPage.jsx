import videoBg from "./videos/natural-28445.mp4";
import "./LoginPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  return (
    <div className="backgroundLogin">
      <video src={videoBg} autoPlay loop muted />
      <div className="contentLogin">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="rowDirectionLogin">
                <Link to="/" relative="path">
                  <button className="backButtonLogin">
                    <img
                      style={{
                        display: "block",
                        width: "17px",
                        height: "29px",
                      }}
                      src={window.location.origin + "/left-arrow.png"}
                      alt="img"
                    />
                  </button>
                </Link>
                <div>
                  <img
                    style={{
                      display: "block",
                      width: "58px",
                      height: "58px",
                    }}
                    src={window.location.origin + "/european-union.png"}
                    alt="img"
                  />
                </div>
                <div className="labelNameLogin">EUROPEAN BORDER CONTROL</div>
                <div>
                  <img
                    style={{
                      display: "block",
                      width: "50px",
                      height: "50px",
                      marginTop: "3px",
                    }}
                    src={window.location.origin + "/biometry.png"}
                    alt="img"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="formLogin d-flex flex-column align-items-center">
                <h1 className="h1Login">Sign in</h1>
                <Form>
                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center inputMarginsLogin"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="marginEmailLogin">
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="inputLogin"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex flex-row align-items-center inputMarginsLogin"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="marginPasswordLogin">
                      Password
                    </Form.Label>
                    <Form.Control
                      className="inputLogin"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Form>
                <Button className="loginBtn" type="submit">
                  <span>Login</span>
                </Button>
                <p className="downTextLogin">
                  We're committed to your privacy. Our form uses the information
                  you provide to us to let you access your personal account. You
                  may log out anytime you want
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
