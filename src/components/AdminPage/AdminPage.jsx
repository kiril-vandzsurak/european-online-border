import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./AdminPage.css";

const AdminPage = () => {
  const [travels, setTravels] = useState([]);

  const fetchAllTravels = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/travelForm/travelAdmin"
      );
      const responseData = await response.json();
      setTravels(responseData);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTravelStatus = async (travelId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:3001/travelForm/travelAdmin/changeStatus/${travelId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to update travel status (${response.status} ${response.statusText})`
        );
      }
      console.log(newStatus, travelId);
      const updatedTravel = await response.json();
      setTravels((prevTravels) =>
        prevTravels.map((travel) =>
          travel._id === travelId ? { ...travel, status: newStatus } : travel
        )
      );
      return updatedTravel;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchAllTravels();
  }, []);

  return (
    <div className="backgroundAdmin">
      <Container fluid style={{ margin: "0px" }}>
        <Row className="topAdmin">
          <div className="mainLabel justify-content-start">
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
            <span className="mainText">
              EUROPEAN BORDER CONTROL <span className="adminName">admin</span>
            </span>
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
          <Col>
            <h1>Travel List</h1>
            <ul>
              {travels
                .filter(
                  (travel) =>
                    !travel.status || travel.status === "Under Consideration"
                )
                .map((travel) => (
                  <li key={travel._id}>
                    <p>Travel information:</p>
                    <ul>
                      {Object.entries(travel).map(([key, value]) => (
                        <li key={key}>
                          {key}: {JSON.stringify(value)}
                        </li>
                      ))}
                      <Button
                        onClick={() =>
                          updateTravelStatus(travel._id, "Approved")
                        }
                      >
                        Approve
                      </Button>{" "}
                      <Button
                        onClick={() =>
                          updateTravelStatus(travel._id, "Rejected")
                        }
                      >
                        Reject
                      </Button>
                    </ul>
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPage;
