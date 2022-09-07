import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Assets/Img/meter1.svg";
import meter2 from "../Assets/Img/meter2.svg";
import meter3 from "../Assets/Img/meter3.svg";
import colorSharp from "../Assets/Img/color-sharp.png";
import { ChevronDoubleDown } from "react-bootstrap-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p className="mb-5">
                Over the past three years, I've been learning and practising new
                skills. YouTube and StackOverfloware my close buddies. They are always there to
                lend a helping hand when I need them :)
              </p>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              > */}
              {/* </Carousel> */}

              <div className="item">
                <h5>Web Development</h5>
                <p>Django, ReactJS, Figma, Adobe XD</p>
              </div>
              <div className="item">
                <h5>DevOps</h5>
                <p>CircleCI, Docker, Jira, Agile Methods</p>
              </div>
              <div className="item">
                <h5>Cloud Computing</h5>
                <p>AWS, Heroku</p>
              </div>
              <div className="item">
                <h5>Teaching</h5>
                <p>Scratch, MIT App Inventor, HTML/CSS/JS, Python</p>
              </div>
              <p>Check out my experience below!</p>
              <a href="#experience">
                <ChevronDoubleDown size={25} className="down-arrow" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Image className="background-image-left" src={colorSharp} />
    </section>
  );
}

export default Skills;
