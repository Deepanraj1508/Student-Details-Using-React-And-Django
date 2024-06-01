import React from 'react';
import './HomePage.css'; // Assuming you have some CSS styles in a separate file
import Student from './Student';


const HomePage = () => {
  return (
    <>
    <div className="home-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>Student App</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to Students</h2>
          <p>Your one-stop solution for all your needs.</p>
          <button className="cta-button">Get Started</button>
        </section>
        <div>
        <Student/>
        </div>
        <section className="features-section">
          <h3>Our Features</h3>
          <div className="features">
            <div className="feature">
              <h4>Feature One</h4>
              <p>Detail about feature one.</p>
            </div>
            <div className="feature">
              <h4>Feature Two</h4>
              <p>Detail about feature two.</p>
            </div>
            <div className="feature">
              <h4>Feature Three</h4>
              <p>Detail about feature three.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default HomePage;
