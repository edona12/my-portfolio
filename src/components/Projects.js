
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Carousel } from "react-bootstrap";

// MIRA
import mira1 from "../mira1.png";
import mira2 from "../mira2.png";
import mira3 from "../mira3.png";
import mira4 from "../mira4.png";
import mira5 from "../mira5.png";
import mira6 from "../mira6.png";

// BOOTSTRAP + NEXIS
import b from "../b.png";
import b1 from "../b1.png";
import b2 from "../b2.png";
import b3 from "../b3.png";
import b4 from "../b4.png";
import b5 from "../b5.png";

import taskManagerPreview from "../taskmanager.png";
import taskManagerScreen1 from "../taskmanager1.png";
import taskManagerScreen3 from "../taskmanager3.png";
import apiScreenshot from "../Api.png";
import filterByStatusScreenshot from "../FilterbyStatus.png";

import nexis from "../nexis.png";

// PERSONAL NOTES API
import personalnotes from "../personalnotes.png";
import register from "../register.png";
import login from "../login.png";

// HOSTLY
import hostly1 from "../hostly1.png";
import hostly2 from "../hostly2.png";
import hostly3 from "../hostly3.png";
import hostly4 from "../hostly4.png";
import hostly5 from "../hostly5.png";
import hostly6 from "../hostly6.png";

// CLINIC APPOINTMENTS
import clinic1 from "../clinic1.png";
import clinic2 from "../clinic2.png";
import clinic3 from "../clinic3.png";
import clinic4 from "../clinic4.png";
import clinic5 from "../clinic5.png";

// AE GAMES
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
      title: "ClinicAppointments (Klinika Vita)",
      description:
        "A clinic appointment booking system for patients, doctors, and admins. Built with Next.js, TypeScript, and Tailwind CSS.",
      link: "https://github.com/edona12/ClinicAppointments",
      screenshots: [clinic1, clinic2, clinic3, clinic4, clinic5],
    },
    {
      title: "Restaurant Management System (Hostly)",
      description:
        "A full-stack restaurant management app for staff: guests, menu, orders, and order lines. Built with ASP.NET Core Web API (Clean Architecture, SQL Server, EF Core, JWT) and a React + Vite frontend.",
      link: "https://github.com/edona12/RestaurantManagementSystem",
      screenshots: [hostly1, hostly2, hostly3, hostly4, hostly5, hostly6],
    },
    {
      title: "Task Manager Mobile",
      description:
        "A mobile task management application built with React Native, Expo Router, and AsyncStorage. The application allows users to manage personal tasks with local data persistence and a simple, user-friendly interface.",
      link: "https://github.com/edona12/task-manager-mobile",
      screenshots: [taskManagerPreview, taskManagerScreen1, taskManagerScreen3, apiScreenshot, filterByStatusScreenshot],
    },
    {
      title: "Ae Games",
      description:
        "A university project with interactive web games using HTML, CSS, JavaScript, and Pixi.js.",
      link: "https://github.com/edona12/AeGames",
      screenshots: [ae2, ae3, ae4, ae5, ae7, ae8, ae16, ae555],
    },
    {
      title: "MIRA Task Manager",
      description:
        "A full-stack task management app built with React, Node.js, PostgreSQL, and MongoDB.",
      link: "https://github.com/edona12/mira-task-manager",
      screenshots: [mira1, mira2, mira3, mira4, mira5, mira6],
    },
    {
      title: "Nexis Project",
      description: "A real-world company website project.",
      link: "https://nexis-test.rrota.com/",
      screenshots: [nexis],
    },
    {
  title: "Personal Notes API",
  description:
    "A RESTful API for managing personal notes with authentication using Node.js, Express, MongoDB, and JWT.",
  link: "https://github.com/edona12/personal-notes-api",
  screenshots: [personalnotes, register, login],
},
    {
      title: "Bootstrap Website",
      description:
        "A modern website layout created with HTML, CSS, and Bootstrap.",
      link: "https://github.com/edona12/Bootstrap-project",
      screenshots: [b, b1, b2, b3, b4, b5],
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [activeScreenshots, setActiveScreenshots] = useState([]);

  const handlePreview = (screenshots) => {
    setActiveScreenshots(screenshots);
    setShowModal(true);
  };

  // Hover effect (overlay + lift)
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const overlay = card.querySelector(".overlay");

      card.addEventListener("mouseenter", () => {
        if (overlay) overlay.style.opacity = 1;
        card.style.transform = "translateY(-8px)";
      });

      card.addEventListener("mouseleave", () => {
        if (overlay) overlay.style.opacity = 0;
        card.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <Container id="projects" className="py-5">
      <h2 className="mb-4 text-center">My Projects</h2>

      <Row>
        {projectList.map((project, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card
              className="border-0 shadow-sm h-100 project-card"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              {/* IMAGE + OVERLAY */}
              {project.screenshots.length > 0 && (
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    src={project.screenshots[0]}
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  {/* OVERLAY */}
                  <div
                    className="overlay d-flex justify-content-center align-items-center"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0,0,0,0.75)",
                      opacity: 0,
                      transition: "0.3s",
                      gap: "10px",
                      zIndex: 2,
                    }}
                  >
                    <Button
                      variant="light"
                      className="text-dark fw-bold"
                      href={project.link}
                      target="_blank"
                    >
                      View
                    </Button>

                    <Button
                      variant="light"
                      className="text-dark fw-bold"
                      onClick={() => handlePreview(project.screenshots)}
                    >
                      Preview
                    </Button>
                  </div>
                </div>
              )}

              {/* BODY */}
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  {project.description}
                </Card.Text>
                {project.screenshots.length === 0 && (
                  <Button
                    variant="dark"
                    size="sm"
                    href={project.link}
                    target="_blank"
                    className="mt-2"
                  >
                    View on GitHub
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
      >
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
                  style={{
                    maxHeight: "60vh",
                    width: "100%",
                    objectFit: "contain",
                  }}
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