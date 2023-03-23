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
      <Popover.Header as="h3">Travel History Info</Popover.Header>
      <Popover.Body>
        <p>
          On this page you can see history of your travels, specifically,{" "}
          <strong>Upcoming Travels</strong> and <strong>Travel History</strong>.
        </p>
        <p>
          If you have not applied for any form, you will see a message, which
          informs you for filling out new travel applications. After applying,
          on this page will appear block with <strong>Upcoming Travels</strong>.
          In each form will be a <strong>Status</strong> section, where you will
          have a possibility to clock on it, and see more details about your
          application.
        </p>

        <p>
          {" "}
          If status is{" "}
          <strong style={{ color: "#E6E213" }}>Under Consideration</strong>, you
          will see a message after clicking on status name, which asks you to
          wait for the response.
        </p>
        <p>
          {" "}
          If status is <strong style={{ color: "red" }}>Rejected</strong>, you
          will see a message after clicking on status name, which tells the
          reason of rejecting your application (the reason is written by Admin).
        </p>
        <p>
          {" "}
          If status is <strong style={{ color: "green" }}>Approved</strong>, you
          will see a link after clicking on status name, where after clicking on
          that link will download a pdf file with qr-code.
        </p>
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
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
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
                    src={window.location.origin + "/MyAccount.png"}
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
                    src={window.location.origin + "/newTravel1.png"}
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
                    src={window.location.origin + "/travelHistory1.png"}
                    alt="img"
                  />
                  <span className="buttonName">Travel History</span>
                </div>
              </Button>
              <Button
                className="menuButtons"
                onClick={() => {
                  navigate(`/info/${userId}`);
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
                    src={window.location.origin + "/info1.png"}
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
                    src={window.location.origin + "/logout1.png"}
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
                  <Row
                    style={{ position: "relative" }}
                    className="fontStyleTravel"
                  >
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
                          <span style={{ marginBottom: "20px" }}>Date</span>
                          {upcomingTravels.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {new Date(item.dateOfCrossing)
                                .toISOString()
                                .slice(0, 10)}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "20px" }}>Time</span>
                          {upcomingTravels.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {item.timeOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "20px" }}>
                            Destination
                          </span>
                          {upcomingTravels.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {item.countryTo}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "20px" }}>
                            Way of Crossing
                          </span>
                          {upcomingTravels.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {item.wayOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "20px" }}>Status</span>
                          {upcomingTravels.map((item, index) => (
                            <div
                              key={item._id}
                              className=" d-flex flex-column mt-2"
                              style={{ border: "none" }}
                            >
                              <Button
                                style={{
                                  cursor: "pointer",
                                  fontSize: "12px",
                                  backgroundColor:
                                    item.status === "Under Consideration"
                                      ? "orange"
                                      : item.status === "Approved"
                                      ? "green"
                                      : item.status === "Rejected"
                                      ? "red"
                                      : "inherit",
                                }}
                                onClick={() => handleToggle(index)}
                              >
                                {item.status}
                              </Button>
                              <Collapse in={open === index}>
                                <div>
                                  {item.status === "Under Consideration" && (
                                    <p>
                                      The decision about your form is not ready
                                      yet
                                    </p>
                                  )}
                                  {item.status === "Approved" && (
                                    <PDFDownloadLink
                                      className="pdfLink"
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
                                  {item.status === "Rejected" &&
                                    item.reasonOfReject}
                                  {console.log(item.reasonOfReject)}
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
                  <Row
                    style={{ position: "relative" }}
                    className="fontStyleTravel"
                  >
                    <div className="upcomingBlock">
                      <h2 className="upcomingName">Travel History</h2>
                      <div
                        className="listOfTravels d-flex flex-row flex-wrap"
                        style={{ padding: "15px" }}
                      >
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Date</span>
                          {travelHistory.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {new Date(item.dateOfCrossing)
                                .toISOString()
                                .slice(0, 10)}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Time</span>
                          {travelHistory.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {item.timeOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>
                            Destination
                          </span>
                          {travelHistory.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {item.countryTo}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>
                            Way of Crossing
                          </span>
                          {travelHistory.map((item) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
                              {item.wayOfCrossing}
                            </div>
                          ))}
                        </Col>
                        <Col className="d-flex flex-column">
                          <span style={{ marginBottom: "10px" }}>Status</span>
                          {travelHistory.map((item, index) => (
                            <div
                              key={item._id}
                              className="d-flex flex-column mt-3"
                            >
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
