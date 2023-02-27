import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RingLoader from "react-spinners/RingLoader";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import Modal from "react-bootstrap/Modal";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            className={styles.loading}
            color="#36d7b7"
            size={200}
            loading={isLoading}
          />
          <p className={styles.loadingText}>Loading...</p>
        </div>
      ) : (
        <div className={styles.background}>
          <Container>
            <Row>
              <Col>
                <div className={styles.rowDirection}>
                  <Link to="/" relative="path">
                    <button className={styles.backButton}>
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
                  <div className={styles.labelName}>
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
          </Container>
          <Container>
            <Row>
              <Col>
                <h3>Create an account</h3>
              </Col>
            </Row>
            <Row>
              <form>
                <Col>
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname" />
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname" />
                  <input type="submit" value="Submit" />
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname" />
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname" />
                  <input type="submit" value="Submit" />
                </Col>
                <Col>
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname" />
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname" />
                  <input type="submit" value="Submit" />
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname" />
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname" />
                  <input type="submit" value="Submit" />
                </Col>
              </form>
            </Row>
            <Row>
              <button onClick={handleShow}>Launch demo modal</button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={handleClose}>Close</button>
                  <button onClick={handleClose}>Save Changes</button>
                </Modal.Footer>
              </Modal>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
