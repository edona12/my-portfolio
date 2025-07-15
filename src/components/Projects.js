import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Carousel } from "react-bootstrap";
import mira1 from "../mira1.png";
import mira2 from "../mira2.png";
import mira3 from "../mira3.png";
import mira4 from "../mira4.png";
import mira5 from "../mira5.png";
import mira6 from "../mira6.png";

import b from "../b.png";
import b1 from "../b1.png";
import b2 from "../b2.png";
import b3 from "../b3.png";
import b4 from "../b4.png";
import b5 from "../b5.png";

import ae16 from "../ae16.png";
import ae2 from "../ae2.png";
import ae3 from "../ae3.png";
import ae4 from "../ae4.png";
import ae5 from "../ae5.png";
import ae7 from "../ae7.png";
import ae8 from "../ae8.png";
import ae555 from "../ae555.png";




const Projects = () => {
  const projectList = [
  {
    title: "MIRA Task Manager",
    description:
      "A full-stack task management app built with React, Node.js, PostgreSQL, and MongoDB.",
    link: "https://github.com/edona12/mira-task-manager",
    screenshots: [mira1, mira2, mira3, mira4, mira5, mira6],
  },
  // {
  //   title: "Personal Portfolio",
  //   description:
  //     "A responsive personal website to showcase my projects and skills.",
  //   link: "https://github.com/edona12/personal-portfolio",
  //   screenshots: [],
  // },
  {
    title: "Bootstrap Website",
    description: "A modern website layout created with HTML, CSS, and Bootstrap.",
    link: "https://github.com/edona12/Bootstrap-project",
    screenshots: [b, b1, b2, b3, b4, b5],
  },
  {
    title: "Ae Games",
    description:
      "A university project that showcases a collection of interactive web games built with HTML, CSS, JavaScript, and Pixi.js.",
    link: "https://github.com/edona12/AeGames",
    screenshots: [ae2, ae3, ae4, ae5, ae7, ae8, ae16, ae555],
  },
];

//   const projectList = [
//     {
//       title: "MIRA Task Manager",
//       description:
//         "A full-stack task management app built with React, Node.js, PostgreSQL, and MongoDB.",
//       link: "https://github.com/edona12/mira-task-manager",
//       screenshots: [mira1, mira2, mira3, mira4, mira5, mira6],
//     },
//     {
//       title: "Personal Portfolio",
//       description:
//         "A responsive personal website to showcase my projects and skills.",
//       link: "https://github.com/edona12/personal-portfolio",
//       screenshots: [],
//     },
//   {
//   title: "Bootstrap Website",
//   description: "A modern website layout created with HTML, CSS, and Bootstrap.",
//   link: "https://github.com/edona12/Bootstrap-project",
//   screenshots: [b, b1, b2, b3, b4, b5],
// },

//   ];

  const [showModal, setShowModal] = useState(false);
  const [activeScreenshots, setActiveScreenshots] = useState([]);

  const handlePreview = (screenshots) => {
    setActiveScreenshots(screenshots);
    setShowModal(true);
  };

  return (
    <Container id="projects" className="py-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
        {projectList.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                  {project.screenshots.length > 0 && (
                    <Button
                      variant="secondary"
                      onClick={() => handlePreview(project.screenshots)}
                    >
                      Preview
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {activeScreenshots.map((src, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Projects;
