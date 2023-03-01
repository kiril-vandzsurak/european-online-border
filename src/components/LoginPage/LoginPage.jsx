import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import videoBg from "./videos/natural-28445.mp4";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="backgroundLogin">
      <video src={videoBg} autoPlay loop muted />
      <Container>
        <Row></Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default LoginPage;
