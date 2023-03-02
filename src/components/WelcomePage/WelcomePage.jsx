import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./WelcomePage.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const WelcomePage = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  return (
    <div className="background">
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Container style={{ width: "95%" }} fluid>
        <Row className="mt-3 mobileVersionNav">
          <Col className="d-flex align-items-center upperNavMobile">
            <div className="mainLabel">
              <img
                className="logoSmallEuro"
                style={{
                  display: "block",
                  width: "58px",
                  height: "58px",
                }}
                src={window.location.origin + "/european-union.png"}
                alt="img"
              />
              <span className="mainText">EUROPEAN BORDER CONTROL</span>
              <img
                className="logoSmallBio"
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
            <Button
              style={{
                display: "none",
                borderRadius: "50%",
                border: "5px #606060 solid",
              }}
              variant="outline-dark"
              className="smallInfo"
            >
              <span>i</span>
            </Button>
          </Col>
          <Col className="btnCol">
            <div className="navButtons">
              <Button
                style={{
                  fontSize: "20px",
                  width: "150px",
                  borderRadius: "50px",
                  height: "46px",
                  marginRight: "20px",
                  position: "relative",
                  zIndex: "1",
                }}
                variant="outline-dark"
                onClick={() => handleShow()}
              >
                Information
              </Button>
              <Button
                style={{
                  fontSize: "20px",
                  width: "150px",
                  borderRadius: "50px",
                  height: "46px",
                  position: "relative",
                  zIndex: "1",
                }}
                variant="outline-dark"
              >
                Login
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="colWidth centerMobileWelcome">
            <img
              className="welcomeLady"
              src={window.location.origin + "/welcome-lady1.png"}
              alt="img"
            />
          </Col>
          <Col className="colWidth centerMobileWelcome">
            <div className="mainTextStyling">
              <div className="downInfo">
                <h5 className="WelcomeH5">Vandzsurak Production</h5>
                <h2 className="WelcomeH2">Welcome to online border!</h2>
                <p className="WelcomeP">
                  Here you have a great possibility to cross an <br /> European
                  border without big queues in <br /> several seconds!
                </p>
              </div>
              <div className="mobileDownButtonsWelcome">
                <Link to="/register" relative="path">
                  <button className="downButtonsWelcome pcVersion">
                    Register
                  </button>
                </Link>
                <Link to="/login" relative="path">
                  <button className="downButtonsWelcome mobileLoginButton">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;
