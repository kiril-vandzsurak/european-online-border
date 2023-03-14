import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const TravelHistory = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  // const [dateOfTravel, setDateOfTravel] = useState(new Date());
  // const [timeOfTravel, setTimeOfTravel] = useState("");
  // const [destination, setDestination] = useState("");
  // const [wayOfCrossing, setWayOfCrossing] = useState("");
  const [forms, setForms] = useState([]);
  const [status, setStatus] = useState("Under Consideration");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const fetchTravels = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/travelForm/userTravels/${userId}/travels`,
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      setForms(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTravels();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={2} style={{ padding: "0" }}>
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#00ee93",
                borderRadius: "20px",
                paddingTop: "14px",
              }}
            >
              <Button
                className="menuButtons"
                onClick={() => {
                  navigate(`/myAccount/${userId}`);
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      display: "block",
                      width: "50px",
                      height: "50px",
                      marginTop: "3px",
                    }}
                    src={window.location.origin + "/travelHistory.png"}
                    alt="img"
                  />
                  <span className="buttonName">My Account</span>
                </div>
              </Button>
              <Button
                className="menuButtons"
                onClick={() => {
                  navigate(`/newTravel/${userId}`);
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      display: "block",
                      width: "50px",
                      height: "50px",
                      marginTop: "3px",
                    }}
                    src={window.location.origin + "/newTravel.png"}
                    alt="img"
                  />
                  <span className="buttonName">New Travel</span>
                </div>
              </Button>
              <Button
                className="menuButtons"
                onClick={() => {
                  navigate(`/travelHistory/${userId}`);
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      display: "block",
                      width: "50px",
                      height: "50px",
                      marginTop: "3px",
                    }}
                    src={window.location.origin + "/travelHistory.png"}
                    alt="img"
                  />
                  <span className="buttonName">Travel History</span>
                </div>
              </Button>
              <Button className="menuButtons">
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      display: "block",
                      width: "50px",
                      height: "50px",
                      marginTop: "3px",
                    }}
                    src={window.location.origin + "/information.png"}
                    alt="img"
                  />
                  <span className="buttonName">Information</span>
                </div>
              </Button>
              <Button className="menuButtons" onClick={handleLogout}>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      display: "block",
                      width: "50px",
                      height: "50px",
                      marginTop: "3px",
                    }}
                    src={window.location.origin + "/logout.png"}
                    alt="img"
                  />
                  <span className="buttonName">Logout</span>
                </div>
              </Button>
            </div>
          </Col>
          <Col lg={10} className="mainPageBackground">
            <Container>
              <Row>
                <div className="mainLabel justify-content-center mt-3">
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
              </Row>
              <Row>
                <Col className="d-flex flex-column">
                  <span>Date</span>
                  {forms.map((item) => (
                    <div key={item._id} className="d-flex flex-column">
                      {new Date(item.dateOfCrossing).toISOString().slice(0, 10)}
                    </div>
                  ))}
                </Col>
                <Col className="d-flex flex-column">
                  <span>Time</span>
                  {forms.map((item) => (
                    <div key={item._id} className="d-flex flex-column">
                      {item.timeOfCrossing}
                    </div>
                  ))}
                </Col>
                <Col className="d-flex flex-column">
                  <span>Destination</span>

                  {forms.map((item) => (
                    <div key={item._id} className="d-flex flex-column">
                      {item.countryTo}
                    </div>
                  ))}
                </Col>
                <Col className="d-flex flex-column">
                  <span>Way of Crossing</span>

                  {forms.map((item) => (
                    <div key={item._id} className="d-flex flex-column">
                      {item.wayOfCrossing}
                    </div>
                  ))}
                </Col>
                <Col className="d-flex flex-column">
                  <span>Status</span>
                  <div className="d-flex flex-column">
                    {forms.map((item) => (
                      <div key={item._id} className="d-flex flex-column">
                        {status}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravelHistory;
