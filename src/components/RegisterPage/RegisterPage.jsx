import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RingLoader from "react-spinners/RingLoader";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

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
          <Container>
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
          </Container>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
