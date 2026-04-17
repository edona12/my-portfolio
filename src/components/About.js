import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="py-5">
      <Row className="align-items-center">
        <Col md={4}>
      
{/* <Image
  src="/selfie.jpeg"
  borderRadius
  alt="My Photo"
   style={{ width: "180px", height: "180px", objectFit: "contain", gap: "100px", background: "#fff" }}
  
/> */}


<Image
  src="/selfie.jpeg"
  alt="My Photo"
  style={{
    width: "250px",
    height: "250px",
    objectFit: "contain",
    borderRadius: "550px",
    marginLeft: "50px",
    background: "#fff"
  }}
/>



        </Col>
        <Col md={8}>
          <h1 style={{ fontSize: "48px", fontWeight: "700" }}>
  Edona Çadraku
</h1>

<p style={{ maxWidth: "600px", marginTop: "15px", color: "#555" }}>
  I build modern, responsive web applications using React, JavaScript, and WordPress, focusing on clean design and user-friendly experiences.
</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;


