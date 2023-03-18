import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./MyAccount.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  personalInfo,
  passportInfo,
  editPersonalInfo,
  editPassportInfo,
  uploadPassportPhoto,
} from "../../redux/actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [showPersonal, setShowPersonal] = useState(false);
  const [showPassport, setShowPassport] = useState(false);
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userBirthdate, setUserBirthdate] = useState(new Date());
  const [userNationality, setUserNationality] = useState("");
  const [userPassportNum, setUserPassportNum] = useState("");
  const [userPassportPhoto, setUserPassportPhoto] = useState(null);

  const handleClosePersonal = () => setShowPersonal(false);
  const handleShowPersonal = () => setShowPersonal(true);
  const handleClosePassport = () => setShowPassport(false);
  const handleShowPassport = () => setShowPassport(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleFileChange = (event) => {
    setUserPassportPhoto(event.target.files[0]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSubmitPhoto = (event) => {
    event.preventDefault();
    if (!userPassportPhoto) {
      alert("Please select an image to upload");
      return;
    }

    dispatch(uploadPassportPhoto(userId, userPassportPhoto));
    setUserPassportPhoto(null);
  };

  useEffect(() => {
    dispatch(personalInfo());
    dispatch(passportInfo());
  }, [dispatch]);

  const editedUserName = useSelector((state) => state.personalInfo.name);
  const editedUserSurname = useSelector((state) => state.personalInfo.surname);
  const editedUserBirthDate = useSelector(
    (state) => state.personalInfo.birthDate
  );
  const editedUserNationality = useSelector(
    (state) => state.passportInfo.nationality
  );
  const editedUserPassportNum = useSelector(
    (state) => state.passportInfo.passportNum
  );
  const editedUserPassportPhoto = useSelector(
    (state) =>
      state.passportInfo.passportPhoto &&
      state.passportInfo.passportPhoto.fileName
  );

  return (
    <div style={{ backgroundColor: "#ECECEA" }}>
      <Modal
        show={showPersonal}
        onHide={handleClosePersonal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Personal data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                onChange={(e) => setUserSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="duedate">
              <Form.Label style={{ marginRight: "33px" }}>
                Birth Date
              </Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                onChange={(e) => setUserBirthdate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePersonal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editPersonalInfo(userName, userSurname, userBirthdate));
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showPassport}
        onHide={handleClosePassport}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Passport data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitPhoto}>
            <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <Form.Select onChange={(e) => setUserNationality(e.target.value)}>
                <option>Austria</option>
                <option>Belgium</option>
                <option>Bulgary</option>
                <option>Hungary</option>
                <option>Germany</option>
                <option>Greece</option>
                <option>Denmark</option>
                <option>Ireland</option>
                <option>Spain</option>
                <option>Italy</option>
                <option>Cyprus</option>
                <option>Latvia</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Malta</option>
                <option>Netherlands</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Romania</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Finland</option>
                <option>France</option>
                <option>Croatia</option>
                <option>Czech Republic</option>
                <option>Sweden</option>
                <option>Estonia</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Passport number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Passport number"
                onChange={(e) => setUserPassportNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Passport Photo</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Button type="submit">save photo</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePassport}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editPassportInfo(userNationality, userPassportNum));
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
                <p className="accountWelcomeText">
                  We are glad to welcome you <span>{editedUserName}</span> in
                  your personal account
                </p>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      width: "600px",
                      height: "238px",
                      backgroundColor: "rgb(233 255 236)",
                      borderRadius: "25px",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                    className="shadowInfoAccount"
                  >
                    <div className="infoBlockName">
                      <h4 className="h4AccountBlockName">
                        Personal Information
                      </h4>
                      <Button className="editBtn">
                        <img
                          style={{
                            display: "block",
                            width: "40px",
                            height: "40px",
                            marginTop: "3px",
                          }}
                          onClick={handleShowPersonal}
                          src={window.location.origin + "/editInfo.png"}
                          alt="img"
                        />
                      </Button>
                    </div>
                    <div>
                      <div className="infoBlocksData ">
                        <span>Name</span>
                        <span className="infoWidth">{editedUserName}</span>
                      </div>
                      <div className="infoBlocksData ">
                        <span>Surname</span>
                        <span className="infoWidth">{editedUserSurname}</span>
                      </div>
                      <div className="infoBlocksData ">
                        <span>Date of birth</span>
                        <span className="infoWidth">
                          {new Date(editedUserBirthDate)
                            .toISOString()
                            .slice(0, 10)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "600px",
                      height: "238px",
                      backgroundColor: "rgb(233 255 236)",
                      borderRadius: "25px",
                    }}
                    className="shadowInfoAccount"
                  >
                    <div className="infoBlockName">
                      <h4 className="h4AccountBlockName">Passport details</h4>
                      <Button className="editBtn">
                        <img
                          style={{
                            display: "block",
                            width: "40px",
                            height: "40px",
                            marginTop: "3px",
                          }}
                          onClick={handleShowPassport}
                          src={window.location.origin + "/editInfo.png"}
                          alt="img"
                        />
                      </Button>
                    </div>
                    <div>
                      <div className="infoBlocksData">
                        <span>Nationality</span>
                        <span className="infoWidthPassport">
                          {editedUserNationality}
                        </span>
                      </div>
                      <div className="infoBlocksData">
                        <span>Passport Num.</span>
                        <span className="infoWidthPassport">
                          {editedUserPassportNum}
                        </span>
                      </div>
                      <div className="infoBlocksData">
                        <span>Passport photo</span>
                        <span className="infoWidthPassport">
                          {editedUserPassportPhoto}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <img
                    className="accountLady"
                    src={window.location.origin + "/account-lady.png"}
                    alt="img"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyAccount;
