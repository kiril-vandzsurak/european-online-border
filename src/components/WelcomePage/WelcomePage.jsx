import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WelcomePage = () => {
  return (
    <div className="background">
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
          </Row>
          <Row className="buttonsRow">
            <button className="buttonAppearance">Information</button>
            <button className="buttonAppearance">Login</button>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WelcomePage;
