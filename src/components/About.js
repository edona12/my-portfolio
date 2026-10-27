import React from "react";

const About = () => (
  <>
    <header id="home" className="hero">
      <div className="section-wrap hero-grid">
        <div>
          <div className="eyebrow">Software developer · Portfolio</div>
          <h1>Edona<span>Çadraku.</span></h1>
          <p className="hero-copy">I build thoughtful digital experiences and reliable applications. I enjoy turning practical ideas into clear, useful products, and keep learning with every project.</p>
          <div className="hero-links"><a className="pill-link primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a><a className="pill-link" href="mailto:edonacadraku@gmail.com">Get in touch</a></div>
        </div>
        <img className="hero-photo" src="/selfie.jpeg" alt="Portrait of Edona Çadraku" fetchPriority="high" />
      </div>
    </header>
    <div className="section-wrap intro-note"><span>Based in Kosovo</span><span>Web · Full stack · Mobile</span></div>
    <section id="about" className="about-section">
      <div className="section-wrap">
        <div className="editorial-grid">
          <div><div className="eyebrow about-kicker">A little about me</div><h2 className="section-title about-title">Curious by<br/>nature.<span>Developer by<br/>craft.</span></h2></div>
          <div className="about-copy">
            <p>I’m a software developer who enjoys building applications from the first idea through to a working product. My projects span responsive websites, full stack tools, APIs, and mobile apps.</p>
            <p>I care about making software useful and approachable. I’m always exploring new tools and finding better ways to solve real problems through code.</p>
            <a className="text-link" href="/Edona%C3%87adrakuCV.pdf" target="_blank" rel="noopener noreferrer">Read my CV ↗</a>
          </div>
        </div>
        <div className="about-skills">
          <div className="skills-heading"><div><div className="eyebrow">My toolkit</div><h3>Tools I work with.</h3></div><p>Technologies I’ve used across my web, full stack, and mobile projects.</p></div>
          <div className="skill-groups">
            <div className="skill-group"><span className="skill-index">01</span><h4>Frontend</h4><div className="skill-tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Tailwind</span><span>Bootstrap</span></div></div>
            <div className="skill-group"><span className="skill-index">02</span><h4>Backend &amp; data</h4><div className="skill-tags"><span>Node.js</span><span>Express</span><span>ASP.NET Core</span><span>REST APIs</span><span>JWT</span><span>SQL Server</span><span>PostgreSQL</span><span>MongoDB</span></div></div>
            <div className="skill-group"><span className="skill-index">03</span><h4>Mobile &amp; tools</h4><div className="skill-tags"><span>React Native</span><span>Expo</span><span>Git</span><span>Vite</span><span>AsyncStorage</span><span>EF Core</span></div></div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
