import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.circles}>
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
      <div className={styles.upperNavbar}>
        <Container fluid className="d-flex justify-content-between">
          <Row>
            <Col className={styles.rowDirection}>
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
              <div className={styles.labelName}>EUROPEAN BORDER CONTROL</div>
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
            </Col>
            <Col>
              <button className={styles.smallInfo}>
                <span>i</span>
              </button>
            </Col>
          </Row>
          <Row>
            <div className="d-flex align-items-center mr-5">
              <button className={styles.upperButtons}>Information</button>
              <button className={styles.upperButtons}>Login</button>
            </div>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid>
          <Row className={styles.rowBottom}>
            <Col className={styles.womanImg}>
              <img
                src={window.location.origin + "/welcome-lady1.png"}
                alt="img"
              />
            </Col>
            <Col className="test">
              <div className={styles.mainTextStyling}>
                <div className={styles.downInfo}>
                  <h5>Vandzsurak Production</h5>
                  <h2>Welcome to online border!</h2>
                  <p>
                    Here you have a great possibility to cross an <br />{" "}
                    European border without big queues in <br /> several
                    seconds!
                  </p>
                </div>
                <Link to="/register" relative="path">
                  <button className={styles.pcVersion}>Register</button>
                </Link>
                <div className={styles.mobileButtons}>
                  <Link to="/register" relative="path">
                    <button className={styles.mobileVersion}>Register</button>
                  </Link>
                  <button className={styles.mobileVersion}>Login</button>
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
