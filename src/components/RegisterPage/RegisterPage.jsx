import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RingLoader from "react-spinners/RingLoader";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import jwt_decode from "jwt-decode";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerName, setRegisterName] = useState("");
  const [registerSurname, setRegisterSurname] = useState("");
  const [registerBirthDate, setRegisterBirthDate] = useState(new Date());
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (registerPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      name: registerName,
      surname: registerSurname,
      email: registerEmail,
      password: registerPassword,
      birthDate: registerBirthDate,
    };

    fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("RESPONSE: ", response);
        return response.json();
      })
      .then((data) => {
        const token = data.accessToken;
        localStorage.setItem("token", token);
        const user = jwt_decode(token);
        console.log("USER: ", user);
        navigate(`/myAccount/${user._id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <RingLoader
            className="loading"
            color="#36d7b7"
            size={200}
            loading={isLoading}
          />
          <p className="loadingText">Loading...</p>
        </div>
      ) : (
        <div className="backgroundRegister">
          <Container fluid style={{ width: "95%" }}>
            <Row>
              <Col>
                <div className="rowDirection">
                  <Link to="/" relative="path">
                    <button className="backButtonRegister">
                      <img
                        style={{
                          display: "block",
                          width: "58px",
                          height: "58px",
                        }}
                        src={window.location.origin + "/left-chevron.png"}
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
                  <div className="labelNameRegister">
                    EUROPEAN BORDER CONTROL
                  </div>
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
            <Row className="responsivness">
              <h1 className="h1Register">Create your account</h1>
            </Row>
            <Row>
              <Col style={{ maxWidth: "30%" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3 inputFlexRegister"
                    controlId="formBasicEmail"
                  >
                    <Form.Label style={{ marginRight: "61px" }}>
                      Name
                    </Form.Label>
                    <Form.Control
                      className="inputLookRegister"
                      type="name"
                      placeholder="Enter your Name"
                      onChange={(event) => setRegisterName(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 inputFlexRegister"
                    controlId="formBasicEmail"
                  >
                    <Form.Label style={{ marginRight: "41px" }}>
                      Surname
                    </Form.Label>
                    <Form.Control
                      className="inputLookRegister"
                      type="name"
                      placeholder="Enter your Surname"
                      onChange={(event) =>
                        setRegisterSurname(event.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group className="inputFlexRegister" controlId="duedate">
                    <Form.Label style={{ marginRight: "33px" }}>
                      Birth Date
                    </Form.Label>
                    <Form.Control
                      className="inputLookRegister"
                      type="date"
                      name="duedate"
                      placeholder="Due date"
                      value={registerBirthDate}
                      onChange={(e) => setRegisterBirthDate(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3 inputFlexRegister"
                    controlId="formBasicEmail"
                  >
                    <Form.Label style={{ marginRight: "59px" }}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      className="inputLookRegister"
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => setRegisterEmail(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 inputFlexRegister"
                    controlId="formBasicPassword"
                  >
                    <Form.Label style={{ marginRight: "90px" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      className="inputLookRegister"
                      type="password"
                      placeholder="Password"
                      onChange={(event) =>
                        setRegisterPassword(event.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 inputFlexRegister"
                    controlId="formBasicPassword"
                  >
                    <Form.Label style={{ marginRight: "36px" }}>
                      Repeat password
                    </Form.Label>
                    <Form.Control
                      className="inputLookRegister"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="confirmRegisterButton"
                  >
                    <span>Confirm registration</span>
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className="d-flex- flex-column">
              <Col>
                <p className="downTextRegister">
                  We're committed to your privacy. Our form uses the information
                  you provide to us to let you access your personal account. You
                  may log out anytime you want
                </p>
              </Col>
            </Row>
            <div className="ladyDissapear">
              <img
                className="ladyRegister"
                src={window.location.origin + "/register-lady.png"}
                alt="img"
              />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
