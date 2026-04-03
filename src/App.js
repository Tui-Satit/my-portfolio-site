import "./App.css";
import profile from "./profile-temp.jpg";
import { useEffect, useState } from "react";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBtn(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio">
      <section className="hero">
        <img src={profile} alt="Tui" className="profile-img" />

        <h1>Hi, I am Tui 👋</h1>
        <h2>Web Developer</h2>
        <p>
          I build modern websites that help your business get more customers and increase sales.
        </p>
        <p className="price-text">Business websites starting from 3,000 THB</p>

        <a
          href="https://line.me/ti/p/~satitMe"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn"
        >
          💬 Get Your Website Now
        </a>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I create clean and modern websites for small businesses. My goal is to help your
          business look professional online and make it easy for customers to contact you.
        </p>
      </section>

      <section className="section services">
        <h2>My Services</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Business Website</h3>
            <p>Modern website for shops, cafes, and small businesses.</p>
          </div>

          <div className="card">
            <h3>Landing Page</h3>
            <p>Simple one-page website to promote your service or product.</p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Website to show your profile, skills, and work professionally.</p>
          </div>
        </div>
      </section>

      <section className="section projects">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          <div className="project-card">
            <h3>Coffee Website</h3>
            <p>Website for coffee shop with menu and LINE contact button.</p>
            <a
              href="https://coffee-website-olive-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Project
            </a>
          </div>

          <div className="project-card">
            <h3>Restaurant Website</h3>
            <p>Website for Thai restaurant with menu and LINE order system.</p>
            <a
              href="https://restaurant-website-three-sooty.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Project
            </a>
          </div>

          <div className="project-card">
            <h3>Bakery Website</h3>
            <p>Website for bakery shop with menu and LINE order button.</p>
            <a
              href="https://bakery-website-two-ruddy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Project
            </a>
          </div>
        </div>
      </section>

      <section className="section contact">
        <h2>Contact Me</h2>
        <p>LINE: satitMe</p>
      </section>

      <a
        href="https://line.me/ti/p/~satitMe"
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-btn ${showBtn ? "show" : ""}`}
      >
        💬 Chat on LINE
      </a>
    </div>
  );
}

export default App;
