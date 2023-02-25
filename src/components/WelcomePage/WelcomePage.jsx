import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="background">
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
      <div className="upperNavbar">
        <Container className="containerWelcome">
          <Row className="rowDirection">
            <Col>
              <img
                style={{
                  display: "block",
                  width: "58px",
                  height: "58px",
                }}
                src={window.location.origin + "/european-union.png"}
                alt="img"
              />
            </Col>
            <Col className="labelName">EUROPEAN BORDER CONTROL</Col>
            <Col>
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
            </Col>
            <Col>
              <button className="smallInfo">
                <span>i</span>
              </button>
            </Col>
          </Row>
          <Row className="buttonsRow">
            <button>Information</button>
            <button>Login</button>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="rowBottom">
            <Col className="womanImg">
              <img
                src={window.location.origin + "/welcome-lady1.png"}
                alt="img"
              />
            </Col>
            <Col>
              <div className="mainTextStyling">
                <div className="downInfo">
                  <h5>Vandzsurak Production</h5>
                  <h2>Welcome to online border!</h2>
                  <p>
                    Here you have a great possibility to cross an <br />{" "}
                    European border without big queues in <br /> several
                    seconds!
                  </p>
                </div>
                <Link to="/register" relative="path">
                  <button className="pcVersion">Register</button>
                </Link>
                <div className="mobileButtons">
                  <Link to="/register" relative="path">
                    <button className="mobileVersion">Register</button>
                  </Link>
                  <button className="mobileVersion">Login</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WelcomePage;
