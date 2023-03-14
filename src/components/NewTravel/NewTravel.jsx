import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const NewTravel = () => {
  const [wayOfCrossing, setWayOfCrossing] = useState("By car");
  const [countryTo, setCountryTo] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carProducer, setCarProducer] = useState("");
  const [drivingLicenseNum, setDrivingLicenseNum] = useState("");
  const [carInsuranceNum, setCarInsuranceNum] = useState("");
  const [carRegistrationNum, setCarRegistrationNum] = useState("");
  const [dateOfCrossing, setDateOfCrossing] = useState(new Date());
  const [timeOfCrossing, setTimeOfCrossing] = useState("");

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
    const data = {
      wayOfCrossing,
      countryTo,
      carNumber,
      carProducer,
      drivingLicenseNum,
      carInsuranceNum,
      carRegistrationNum,
      dateOfCrossing,
      timeOfCrossing,
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
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Visiting country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      onChange={(e) => {
                        setCountryTo(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Way of crossing</Form.Label>
                    <Form.Select onChange={handleOptionChange}>
                      <option value="By car">By car</option>
                      <option value="By walk">By walk</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Disable the car-related forms when "By walk" is selected */}
                  <Form.Group className="mb-3" controlId="carNumber">
                    <Form.Label>Car number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Car number"
                      disabled={wayOfCrossing === "By walk"}
                      onChange={(e) => {
                        setCarNumber(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="carProducer">
                    <Form.Label>Car producer</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Car producer"
                      disabled={wayOfCrossing === "By walk"}
                      onChange={(e) => {
                        setCarProducer(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="drivingLicenseNumber">
                    <Form.Label>Driving license number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Driving license number"
                      disabled={wayOfCrossing === "By walk"}
                      onChange={(e) => {
                        setDrivingLicenseNum(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="carInsuranceNumber">
                    <Form.Label>Car insurance number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Car insurance number"
                      disabled={wayOfCrossing === "By walk"}
                      onChange={(e) => {
                        setCarInsuranceNum(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="carRegistrationNumber"
                  >
                    <Form.Label>Car registration number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Car registration number"
                      disabled={wayOfCrossing === "By walk"}
                      onChange={(e) => {
                        setCarRegistrationNum(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date of crossing</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      min={new Date().toISOString().slice(0, 10)}
                      value={dateOfCrossing.toISOString().slice(0, 10)}
                      onChange={handleDateChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Time of crossing</Form.Label>
                    <Form.Control
                      type="time"
                      onChange={(e) => {
                        setTimeOfCrossing(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewTravel;
