import videoBg from "./videos/natural-28445.mp4";
import "./LoginPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // add state for error message
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("Begins!");
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      console.log(response);
      const token = response.data.accessToken;
      localStorage.setItem("token", token); // added JSON.stringify()
      const user = jwt_decode(token);
      console.log(user);
      console.log("1");
      navigate(`/myAccount/${user._id}`); // removed ".push()"
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email or password"); // set error message state
    }
  };
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
                {errorMessage && ( // render error message if it exists
                  <div className="text-danger mb-3">{errorMessage}</div>
                )}
                <Form onSubmit={handleSubmit}>
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
                      onChange={(event) => setEmail(event.target.value)}
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
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Form.Group>
                  <Button className="loginBtn" type="submit">
                    <span>Login</span>
                  </Button>
                </Form>
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
