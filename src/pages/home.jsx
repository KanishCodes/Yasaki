import React, { useEffect } from "react";
import "../styles/home.css";
import { setupHomeInteractions } from "../scripts/home"; // ← IMPORT HERE



function Home() {
  useEffect(() => {
    const cleanup = setupHomeInteractions(); // Run interactions on mount
    return cleanup; // Clean up on unmount
  }, []);

  return (
    <>
      {/* Marquee Bars */}
      <div className="marquee-container transparent">
        <div className="marquee-content">
          🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣
        </div>
      </div>

      {/* Navbar */}
      


      {/* Welcome Section */}
      <section id="welcome-section">
        <div id="welcome-message"></div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="images/index/girlEats.avif" alt="Hero Background" />
        </div>
        <div className="hero-overlay">
          <h1 id="interactive-heading">YASAKI</h1>
          <p className="hero-tagline">A Journey Through Authentic Japanese Flavors</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section">
        <div className="about-content">
          <h2 style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "4rem", color: "#f71313" }}>
            About Us
          </h2>
          <p style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: "larger" }}>
            At Yasaki, we are passionate about delivering an exceptional Japanese dining experience...
            <br />From sushi and sashimi to ramen and bento...
            <br />At the heart of Yasaki is a commitment to quality...
            <br />Join us at Yasaki and experience the true taste of Japan!
          </p>
        </div>
        <div className="about-image">
          <img src="images/index/aboutUs.jpg" alt="Japanese Cuisine" />
        </div>
      </section>

      {/* Collage Section */}
      <section className="collage-section">
        <div className="collage-container">
          <img src="images/index/hero1.jpg" alt="Dish 1" className="collage-item trivia" data-trivia="Did you know? Sushi started as a preservation method!" />
          <img src="images/index/hero2.jpg" alt="Dish 2" className="collage-item trivia" data-trivia="Tempura was introduced to Japan by Portuguese missionaries." />
          <img src="images/index/hero3.jpg" alt="Dish 3" className="collage-item trivia" data-trivia="Japan has over 80,000 ramen shops!" />
          <img src="images/index/hero4.jpg" alt="Dish 4" className="collage-item trivia" data-trivia="Sake is brewed like beer but served like wine." />
          <img src="images/index/hero5.jpg" alt="Dish 5" className="collage-item trivia" data-trivia="Wasabi is traditionally grated on sharkskin." />
          <img src="images/index/hero6.jpg" alt="Dish 6" className="collage-item trivia" data-trivia="Matcha tea dates back over 1,000 years." />
        </div>
      </section>

      {/* Chef's Picks */}
      <section id="chef-recommendations">
        <h2 style={{ textAlign: "center", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "5rem", color: "rgb(243, 222, 61)" }}>
          Chef's Picks
        </h2>
        <div className="slider">
          <div className="slide"><img src="images/index/chefs1.jpg" alt="Dish 1" /></div>
          <div className="slide"><img src="images/index/chefs2.jpg" alt="Dish 2" /></div>
          <div className="slide"><img src="images/index/chefs3.jpg" alt="Dish 3" /></div>
        </div>
      </section>

      {/* Gamification */}
      <section id="gamification">
        <p style={{ textAlign: "center", fontSize: "larger", fontWeight: 700, fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: "#9bafec" }}>
          Find the hidden sushi icon on this page and win a surprise!
        </p>
        <img src="images/index/sushiFloaty.jpg" alt="Hidden Sushi" id="hidden-sushi" />
      </section>

      {/* Quiz Widget */}
      <section id="quiz-widget">
        <h2 style={{ fontSize: "3rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>Find Your Dish!</h2>
        <form id="quiz-form">
          <div className="quiz-container">
            <label style={{ color: "#9b0505", fontWeight: 700, fontSize: "25px" }} htmlFor="quiz-question">What flavor do you prefer?</label>
            <select id="quiz-question" name="preference">
              <option value="spicy">Spicy</option>
              <option value="savory">Savory</option>
              <option value="sweet">Sweet</option>
            </select>
            <button type="submit" className="btn-primary">Get Your Dish</button>
          </div>
        </form>
        <div id="quiz-result"></div>
      </section>

      <div className="marquee-container monogram transparent">
        <div className="marquee-content">We love you too 💖 We love you too 💖 We love you too 💖 We love you too 💖</div>
      </div>

      {/* Footer */}
      <footer>
        <div className="icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-snapchat"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <p>Copyright © 2024 Yasaki. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;
