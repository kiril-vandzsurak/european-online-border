import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Information.css";

const Information = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const items = [
    {
      id: "1",
      heading: "Which data should I provide to fulfil travel forms?",
      content:
        "For fulfilling travel forms, you should provide us with your passport data such as passport number, citizenship and passport photo. You can fulfil this data in 'My Account' page",
    },
    {
      id: "2",
      heading: "How many time should I wait for result of my application",
      content:
        "Usually, the answer to your application will be known within 2 to 4 hours",
    },
    {
      id: "3",
      heading: "How long can I stay in the country I have visited?",
      content:
        "It depends on a country, which you have visited. In most non EU countries with european passports you can stay there not more than for 90 days per year. For more information, contact the consulate of the country you are going to visit",
    },
    {
      id: "4",
      heading:
        "I was late for crossing the border for more than an hour, what should I do",
      content:
        "You have a possibility to be late for crossing the border not more than for 10 minutes. In case if you are late more than for 10 minutes, you will have to cross the border in a live queue. For this reason, you should plan your trip very accurately and be on the border at the time you specified",
    },
    {
      id: "5",
      heading: "When my application is approved, what should i do next?",
      content:
        "If you application is approved, you will have to click on this status and see button for downloading pdf file. In this pdf file, you will see some general info and qr-code. You can print out this document, or download it on your smartphone. At the moment of crossing the border, you will have to go through the turnstile and scan your qr-code and your passport. In case of crossing a border on a car, you will have to show your pdf with qr-code to border guard. He will check your documents and scan your qr-code",
    },
  ];

  return (
    <div style={{ backgroundColor: "#ECECEA" }}>
      <Container fluid>
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
                <h2 className="h2Info">
                  What you need to know when traveling outside the EU
                </h2>
              </Row>
              <Row>
                <div className="accordion" id="accordionExample">
                  {items.map((item, index) => (
                    <div
                      className="card"
                      key={item.id}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="card-header" id={`heading${item.id}`}>
                        <h2 className="mb-0">
                          <button
                            className={` collapseText btn btn-link btn-block text-left ${
                              activeIndex === index ? "" : "collapsed"
                            }`}
                            type="button"
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse${item.id}`}
                          >
                            <span className="collapseSign">
                              {activeIndex === index ? "-" : "+"}
                            </span>
                            {item.heading}
                          </button>
                        </h2>
                      </div>

                      <div
                        id={`collapse${item.id}`}
                        className={`collapse ${
                          activeIndex === index ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;
