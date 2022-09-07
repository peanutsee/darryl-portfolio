import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assets/Img/header-img.svg";
import { Link } from "react-router-dom";

function Banner() {
  const toRotate = ["Web Developer.", "Data Scientist."];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio!</span>
            <h1>
              {`Hi! I'm Darryl the `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I specialize the Python programming langauge and have prior
              experience in building scalable web applications with React.jS,
              Django, Relational Databases, Heroku and AWS Technologies.
            </p>
            <a href="https://www.linkedin.com/in/darrylseeweishen/">
              <button>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image fluid src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
