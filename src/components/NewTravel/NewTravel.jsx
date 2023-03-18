import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useEffect } from "react";
import "./NewTravel.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const NewTravel = () => {
  const [wayOfCrossing, setWayOfCrossing] = useState("By car");
  const [countryTo, setCountryTo] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [drivingLicenseNum, setDrivingLicenseNum] = useState("");
  const [carInsuranceNum, setCarInsuranceNum] = useState("");
  const [carVinCode, setCarVinCode] = useState("");
  const [dateOfCrossing, setDateOfCrossing] = useState(new Date());
  const [timeOfCrossing, setTimeOfCrossing] = useState("");
  const [carLicensePlate, setCarLicensePlate] = useState("");
  const [status, setStatus] = useState("Under Consideration");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const { userId } = useParams();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleDateChange = (e) => {
    setDateOfCrossing(new Date(e.target.value));
  };

  const handleOptionChange = (event) => {
    setWayOfCrossing(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!countryTo || !wayOfCrossing || !dateOfCrossing || !timeOfCrossing) {
      alert("Please fill in all required fields.");
      return;
    }

    setFormSubmitted(true);

    const data = {
      wayOfCrossing,
      countryTo,
      carBrand,
      carModel,
      drivingLicenseNum,
      carInsuranceNum,
      carVinCode,
      carLicensePlate,
      dateOfCrossing,
      timeOfCrossing,
      status,
      userId,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/travelForm/fulfilNewForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/me", {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
        <img
          className="imgBackgroudTravel"
          src={window.location.origin + "/travelHistoryImg.png"}
          alt="img"
        />
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
              <Row>
                <h4 className="h4NewTravel">Fill out form for New Travel</h4>
                {formSubmitted && (
                  <Alert
                    variant="success"
                    onClose={() => setFormSubmitted(false)}
                    dismissible
                  >
                    Form successfully sent!
                  </Alert>
                )}
                {!user.nationality || !user.passportNum ? (
                  <span>
                    Before filling up the form, please fill out your passport
                    data in "My Account"
                  </span>
                ) : (
                  <Form
                    style={{
                      width: "620px",
                      marginInline: "auto",
                      zIndex: "1",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="formBasicEmail"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Visiting country
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        onChange={(e) => {
                          setCountryTo(e.target.value);
                        }}
                        disabled={!user.nationality || !user.passportNum}
                        required
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex justify-content-around">
                      <Form.Label style={{ width: "300px" }}>
                        Way of crossing
                      </Form.Label>
                      <Form.Select
                        onChange={handleOptionChange}
                        disabled={!user.nationality || !user.passportNum}
                        required
                        style={{ width: "300px", borderRadius: "20px" }}
                      >
                        <option value="By car">By car</option>
                        <option value="By walk">By walk</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Disable the car-related forms when "By walk" is selected */}
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="carNumber"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Car brand
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Car brand"
                        disabled={
                          wayOfCrossing === "By walk" ||
                          !user.nationality ||
                          !user.passportNum
                        }
                        onChange={(e) => {
                          setCarBrand(e.target.value);
                        }}
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="carProducer"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Car model
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Car model"
                        disabled={
                          wayOfCrossing === "By walk" ||
                          !user.nationality ||
                          !user.passportNum
                        }
                        onChange={(e) => {
                          setCarModel(e.target.value);
                        }}
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="drivingLicenseNumber"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Driving license number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Driving license number"
                        disabled={
                          wayOfCrossing === "By walk" ||
                          !user.nationality ||
                          !user.passportNum
                        }
                        onChange={(e) => {
                          setDrivingLicenseNum(e.target.value);
                        }}
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="carInsuranceNumber"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Car insurance number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Car insurance number"
                        disabled={
                          wayOfCrossing === "By walk" ||
                          !user.nationality ||
                          !user.passportNum
                        }
                        onChange={(e) => {
                          setCarInsuranceNum(e.target.value);
                        }}
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="carRegistrationNumber"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        VIN Code
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="VIN Code"
                        disabled={
                          wayOfCrossing === "By walk" ||
                          !user.nationality ||
                          !user.passportNum
                        }
                        onChange={(e) => {
                          setCarVinCode(e.target.value);
                        }}
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="carLicensePlate"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Car License Plate
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Car License Plate"
                        disabled={
                          wayOfCrossing === "By walk" ||
                          !user.nationality ||
                          !user.passportNum
                        }
                        onChange={(e) => {
                          setCarLicensePlate(e.target.value);
                        }}
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="formBasicEmail"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Date of crossing
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        min={new Date().toISOString().slice(0, 10)}
                        value={dateOfCrossing.toISOString().slice(0, 10)}
                        onChange={handleDateChange}
                        disabled={!user.nationality || !user.passportNum}
                        required
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="formBasicEmail"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Time of crossing
                      </Form.Label>
                      <Form.Control
                        type="time"
                        onChange={(e) => {
                          setTimeOfCrossing(e.target.value);
                        }}
                        disabled={!user.nationality || !user.passportNum}
                        required
                        style={{ width: "300px", borderRadius: "20px" }}
                      />
                    </Form.Group>
                    <Button
                      style={{
                        fontSize: "20px",
                        width: "290px",
                        borderRadius: "50px",
                        height: "60px",
                        position: "relative",
                        zIndex: "1",
                      }}
                      className="hoverBtnNewTravel"
                      variant="outline-dark"
                      type="submit"
                      disabled={!user.nationality || !user.passportNum}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewTravel;
