import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfFile from "../PdfFile/PfdFile.jsx";
import "./TravelHistory.css";
import { Collapse } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const TravelHistory = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [forms, setForms] = useState([]);
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

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

  const today = new Date();
  const upcomingTravels = forms.filter(
    (item) => new Date(item.dateOfCrossing) >= today
  );
  const travelHistory = forms.filter(
    (item) => new Date(item.dateOfCrossing) < today
  );

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  return (
    <div style={{ backgroundColor: "#ECECEA" }}>
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
          <Col lg={10} className="backgroundTravelHistory">
            <div className="parent-container" style={{ height: "100vh" }}>
              <Container style={{ height: "100%", overflow: "auto" }}>
                <img
                  className="pictureBg"
                  src={window.location.origin + "/historyBg.png"}
                  alt="img"
                />
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <Button className="questionPopOver">
                    <img
                      className="questionIcon "
                      src={window.location.origin + "/questionIcon.png"}
                      alt="img"
                    />
                  </Button>
                </OverlayTrigger>
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
                {upcomingTravels.length === 0 && travelHistory.length === 0 && (
                  <h2 className="defaultText">
                    There is no travel forms sent. To see your history - sent a
                    form
                  </h2>
                )}
                {upcomingTravels.length > 0 && (
                  <Row style={{ position: "relative" }}>
                    <div
                      className="upcomingBlock"
                      style={{ marginTop: "20px" }}
                    >
                      <h2 className="upcomingName">Upcoming Travels</h2>
                      <div
                        className="listOfTravels d-flex flex-row flex-wrap"
                        style={{ padding: "15px" }}
                      >
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Date</span>
                          {upcomingTravels.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {new Date(item.dateOfCrossing)
                                .toISOString()
                                .slice(0, 10)}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Time</span>
                          {upcomingTravels.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {item.timeOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>
                            Destination
                          </span>
                          {upcomingTravels.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {item.countryTo}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>
                            Way of Crossing
                          </span>
                          {upcomingTravels.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {item.wayOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Status</span>
                          {upcomingTravels.map((item, index) => (
                            <div key={item._id} className="d-flex flex-column">
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => handleToggle(index)}
                              >
                                {item.status}
                              </span>
                              <Collapse in={open === index}>
                                <div>
                                  {item.status === "Under Consideration" && (
                                    <p>Wait</p>
                                  )}
                                  {item.status === "Approved" && (
                                    <PDFDownloadLink
                                      document={<PdfFile />}
                                      fileName="border-pass.pdf"
                                    >
                                      {({ blob, url, loading, error }) =>
                                        loading
                                          ? "Loading document..."
                                          : "Download border pass"
                                      }
                                    </PDFDownloadLink>
                                  )}
                                  {item.status === "Rejected" && <p>Reason</p>}
                                </div>
                              </Collapse>
                            </div>
                          ))}
                        </Col>
                      </div>
                    </div>
                  </Row>
                )}

                {travelHistory.length > 0 && (
                  <Row style={{ position: "relative" }}>
                    <div className="upcomingBlock">
                      <h2 className="upcomingName">Travel History</h2>
                      <div
                        className="listOfTravels d-flex flex-row flex-wrap"
                        style={{ padding: "15px" }}
                      >
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Date</span>
                          {travelHistory.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {new Date(item.dateOfCrossing)
                                .toISOString()
                                .slice(0, 10)}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Time</span>
                          {travelHistory.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {item.timeOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>
                            Destination
                          </span>
                          {travelHistory.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {item.countryTo}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>
                            Way of Crossing
                          </span>
                          {travelHistory.map((item) => (
                            <div key={item._id} className="d-flex flex-column">
                              {item.wayOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Status</span>
                          {travelHistory.map((item, index) => (
                            <div key={item._id} className="d-flex flex-column">
                              <span>{item.status}</span>
                            </div>
                          ))}
                        </Col>
                      </div>
                    </div>
                  </Row>
                )}
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravelHistory;
