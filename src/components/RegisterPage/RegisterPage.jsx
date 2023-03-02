import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RingLoader from "react-spinners/RingLoader";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
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
            <Row>
              <h1 className="h1Register">Create your account</h1>
            </Row>
            <Row>
              <Col style={{ maxWidth: "30%" }}>
                <Form>
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
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
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
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="d-flex- flex-column">
              <Col>
                <Button className="confirmRegisterButton">
                  <span>Confirm registration</span>
                </Button>
              </Col>
              <Col>
                <p className="downTextRegister">
                  We're committed to your privacy. Our form uses the information
                  you provide to us to let you access your personal account. You
                  may log out anytime you want
                </p>
              </Col>
            </Row>
            <div>
              <img
                className="ladyRegister"
                src={window.location.origin + "/welcome-lady1.png"}
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
