import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Skills = () => {

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "Bootstrap", level: 85 },
  { name: "WordPress", level: 70 },
  { name: "Node.js", level: 30 },
  { name: "Git", level: 85 },
  { name: "AI Tools", level: 80 },
  { name: "Agile/Scrum", level: 70 },


 
];

  return (
    <Container id="skills" className="py-5">
      <h2 className="mb-4">My Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <h5>{skill.name}</h5>
            <ProgressBar now={skill.level} label={`${skill.level}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
