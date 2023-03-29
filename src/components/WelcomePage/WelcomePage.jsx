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
          <Modal.Title>European online border</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            European online border is a brand new technology for crossing
            european borders with other non-european countries in several
            seconds. This application has four main features:
          </p>
          <h2>Four main features</h2>
          <ul>
            <li>Completing a form for crossing border</li>
            <li>Viewing a history of your travels</li>
            <li>Editing your personal information in "My account" page</li>
            <li>Admin Page</li>
          </ul>
          <h2>Desciption</h2>
          <p>
            What is the main purpose of using this app? The answer is simple.
            First step you should do, it is to register/login. In addition, You
            will have a possibility to login via Google account After accessing
            your page, you will see three main pages:
          </p>
          <ul>
            <li>My Account</li>
            <li>New Travel</li>
            <li>Travel History</li>
            <li>Admin Page</li>
          </ul>
          <p>
            In "My Account" you will have your personal information, which you
            have provided during registration. There you will be able to edit
            it, for example email or password <br />
            <br /> In "New Travel" you will see a form, through which you can
            complete it for getting permission to cross border. There you can
            set a specific time of border crossing. Furthermore, you can specify
            the way of crossing a border(by car or by walk or etc.).
            Nevertheless, so that you can get permission to cross the border,
            your request will have to be confirmed by an online customs officer
            or the so-called admin. After confirmation by the admin, you will
            receive a PDF file with a qr code that you will need to scan at the
            border turnstile. One second, and you in the other country :) <br />
            <br /> In "Travel History" you will see all travels, which you have
            accomplished with our application <br />
            <br /> As well there will be an Admin Page. There Admin will see all
            registered users. Main feature of Admin Page is confirming border
            crossing for users
          </p>
          <h2>Author</h2>
          <ul>
            <a
              href="https://www.linkedin.com/in/kiril-vandzsurak-537725217/"
              target="_blank"
              rel="noreferrer"
            >
              <li>@kiril-vandzsurak</li>
            </a>
          </ul>
          <h2>Have a nice trip!</h2>
        </Modal.Body>
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
                className="hoverBtnWelcome"
                onClick={() => handleShow()}
              >
                Information
              </Button>
              <Link to="/login">
                <Button
                  style={{
                    fontSize: "20px",
                    width: "150px",
                    borderRadius: "50px",
                    height: "46px",
                    position: "relative",
                    zIndex: "1",
                  }}
                  className="hoverBtnWelcome"
                  variant="outline-dark"
                >
                  Login
                </Button>
              </Link>
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
