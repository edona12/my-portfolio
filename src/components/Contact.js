// import React from "react";
// import { Container } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-4 mt-5">
//       <Container className="text-center">
//         <p>
//           © {new Date().getFullYear()} Edona Cadraku. Passionate Web Developer.
//         </p>
//         <p>
//           Email: <a href="mailto:edonacadraku@gmail.com" className="text-white">edonacadraku@gmail.com</a> | 
//           LinkedIn: <a href="https://www.linkedin.com/in/edona-%C3%A7adraku-623b59241/" target="_blank" rel="noopener noreferrer" className="text-white">Profile</a>
//         </p>
//         <a 
//           href="/cv.pdf" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="btn btn-primary mt-2"
//         >
//           View My CV
//         </a>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <p>
          © {new Date().getFullYear()} Edona Cadraku. Passionate Web Developer.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:edonacadraku@gmail.com" className="text-white">
            edonacadraku@gmail.com
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+38344123456" className="text-white">
            +383 49 407 172
          </a>{" "}
          | LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/edona-%C3%A7adraku-623b59241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Profile
          </a>
        </p>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          View My CV
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
