import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="py-5">
      <Row className="align-items-center">
        <Col md={4}>
       {/* <Image
  src="/selfie.jpeg"
  roundedCircle
  alt="My Photo"
  style={{ width: "180px", height: "180px", objectFit: "cover" }}
/> */}
<Image
  src="/selfie.jpeg"
  roundedCircle
  alt="My Photo"
  style={{ width: "180px", height: "180px", objectFit: "contain", background: "#fff" }}
/>




        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
           Hi, I'm Edona Çadraku, a web developer with experience in React, JavaScript, HTML, CSS, and project management. I enjoy creating clean,
            responsive websites and practical solutions. I'm open to new opportunities where I can contribute and grow professionally.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
