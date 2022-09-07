import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/Img/logo.svg";
import navIcon1 from "../Assets/Img/nav-icon1.svg";
import navIcon2 from "../Assets/Img/nav-icon2.svg";
import navIcon3 from "../Assets/Img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <span id="logo">Darryl</span> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/darrylseeweishen/">
                <img src={navIcon1} alt="Icon" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a> */}
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
