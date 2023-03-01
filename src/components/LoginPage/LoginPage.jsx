import videoBg from "./videos/natural-28445.mp4";
import "./LoginPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="backgroundLogin">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
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
                <div className="labelNameRegister">EUROPEAN BORDER CONTROL</div>
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
          <Row></Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
