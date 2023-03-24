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
import { useRef } from "react";

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
  const [travelPurpose, setTravelPurpose] = useState("");
  const [status, setStatus] = useState("Under Consideration");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [user, setUser] = useState("");
  const formRef = useRef(null);

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
      travelPurpose,
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
      formRef.current.reset();
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
      <Popover.Header as="h3">New Travel Info</Popover.Header>
      <Popover.Body>
        <p>
          On this page you can see a form for travels applying. Without passport
          details fulfilled on the <strong>My Account</strong> page, you will
          not be able to complete this form. Please be careful when filling out
          the form, as each of them will be checked by border guards and in case
          of a typo or incorrectly entered data, your application will be
          rejected
        </p>
        <p>
          Moreover, you should remember, that this application works only with
          countries, which are not part of the European Union. In case of
          providing in the forms countries such as Austria, France etc. your
          application also will be rejected.
        </p>
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
              className="shadowMenu"
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#ECECEA",
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
                  <span className="beforeStyleTravelNew">
                    Before filling up the form, please fill out your passport
                    data in "My Account"
                  </span>
                ) : (
                  <Form
                    style={{
                      width: "620px",
                      marginInline: "auto",
                      zIndex: "1",
                      marginTop: "17px",
                    }}
                    ref={formRef}
                    className="fonsStyle"
                    onSubmit={handleSubmit}
                  >
                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="formBasicEmail"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Visiting country
                      </Form.Label>
                      <Form.Select
                        onChange={(e) => setCountryTo(e.target.value)}
                        disabled={!user.nationality || !user.passportNum}
                        required
                        style={{ width: "300px", borderRadius: "20px" }}
                      >
                        <option>Ukraine</option>
                        <option>Russia</option>
                        <option>Belarus</option>
                        <option>Serbia</option>
                        <option>Turkey</option>
                        <option>Macedonia</option>
                        <option>Montenegro</option>
                        <option>Andora</option>
                        <option>England</option>
                        <option>Albania</option>
                        <option>Moldova</option>
                      </Form.Select>
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
                    {wayOfCrossing !== "By walk" && (
                      <>
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
                            disabled={!user.nationality || !user.passportNum}
                            onChange={(e) => {
                              setCarBrand(e.target.value);
                            }}
                            required
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
                            disabled={!user.nationality || !user.passportNum}
                            onChange={(e) => {
                              setCarModel(e.target.value);
                            }}
                            required
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
                            disabled={!user.nationality || !user.passportNum}
                            onChange={(e) => {
                              setDrivingLicenseNum(e.target.value);
                            }}
                            required
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
                            disabled={!user.nationality || !user.passportNum}
                            onChange={(e) => {
                              setCarInsuranceNum(e.target.value);
                            }}
                            required
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
                            disabled={!user.nationality || !user.passportNum}
                            onChange={(e) => {
                              setCarVinCode(e.target.value);
                            }}
                            required
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
                            disabled={!user.nationality || !user.passportNum}
                            onChange={(e) => {
                              setCarLicensePlate(e.target.value);
                            }}
                            required
                            style={{ width: "300px", borderRadius: "20px" }}
                          />
                        </Form.Group>
                      </>
                    )}

                    <Form.Group
                      className="mb-3 d-flex justify-content-around"
                      controlId="carLicensePlate"
                    >
                      <Form.Label style={{ width: "300px" }}>
                        Purpose of travel
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Purpose of travel"
                        disabled={!user.nationality || !user.passportNum}
                        onChange={(e) => {
                          setTravelPurpose(e.target.value);
                        }}
                        required
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
