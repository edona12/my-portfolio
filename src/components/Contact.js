import React from "react";

const Contact = () => (
  <footer id="contact" className="contact-footer">
    <div className="section-wrap">
      <div className="eyebrow">Have a project in mind?</div>
      <h2>Let’s make<br />something useful.</h2>
      <p><a href="mailto:edonacadraku@gmail.com">edonacadraku@gmail.com</a>　·　<a href="tel:+38349407172">+383 49 407 172</a></p>
      <p><a href="https://www.linkedin.com/in/edona-%C3%A7adraku-623b59241/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>　·　<a href="https://github.com/edona12" target="_blank" rel="noopener noreferrer">GitHub ↗</a>　·　<a href="/Edona%C3%87adrakuCV.pdf" target="_blank" rel="noopener noreferrer">View my CV ↗</a></p>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Edona Çadraku</span><a href="#home">Back to top ↑</a></div>
    </div>
  </footer>
);

export default Contact;
