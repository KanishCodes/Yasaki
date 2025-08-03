import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

// Array of slides for the slider
const chefSlides = [
  "images/index/chefs1.jpg",
  "images/index/chefs2.jpg",
  "images/index/chefs3.jpg",
];

function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [sliderIndex, setSliderIndex] = useState(0);
  const [quizPreference, setQuizPreference] = useState("spicy");
  const [quizResult, setQuizResult] = useState("");
  const headingRef = useRef(null);

  // Effect for the welcome message
  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    setWelcomeMessage(`こんにちは! Welcome to Yasaki. It’s ${days[today.getDay()]}, and we’re excited to serve you!`);
  }, []);

  // Effect for the interactive heading
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headingRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        headingRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Effect for the slider
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % chefSlides.length);
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, []);

  // Handler for the hidden sushi click
  const handleSushiClick = () => {
    alert("You found the hidden sushi! Enjoy a free dessert on your first reservation!");
  };

  // Handler for the quiz form submission
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (quizPreference === "spicy") {
      setQuizResult("You should try our Spicy Tuna Roll!");
    } else if (quizPreference === "savory") {
      setQuizResult("How about our Teriyaki Chicken Bento?");
    } else {
      setQuizResult("Our Matcha Cheesecake is perfect for you!");
    }
  };

  return (
    <>
      {/* Marquee Bar */}
      <div className="marquee-container transparent">
        <div className="marquee-content">🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣 moshi-moshi 🍣</div>
      </div>

      {/* Welcome Section */}
      <section id="welcome-section">
        <div id="welcome-message">{welcomeMessage}</div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="images/index/girlEats.avif" alt="Hero Background" />
        </div>
        <div className="hero-overlay">
          <h1 id="interactive-heading" ref={headingRef}>YASAKI</h1>
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
          </p>
        </div>
        <div className="about-image">
          <img src="images/index/aboutUs.jpg" alt="Japanese Cuisine" />
        </div>
      </section>

      {/* Collage Section */}
      <section className="collage-section">
        <div className="collage-container">
          <img src="images/index/hero1.jpg" alt="Dish 1" className="collage-item" data-trivia="Did you know? Sushi started as a preservation method!" />
          <img src="images/index/hero2.jpg" alt="Dish 2" className="collage-item" data-trivia="Tempura was introduced to Japan by Portuguese missionaries." />
          <img src="images/index/hero3.jpg" alt="Dish 3" className="collage-item" data-trivia="Japan has over 80,000 ramen shops!" />
          <img src="images/index/hero4.jpg" alt="Dish 4" className="collage-item" data-trivia="Sake is brewed like beer but served like wine." />
          <img src="images/index/hero5.jpg" alt="Dish 5" className="collage-item" data-trivia="Wasabi is traditionally grated on sharkskin." />
          <img src="images/index/hero6.jpg" alt="Dish 6" className="collage-item" data-trivia="Matcha tea dates back over 1,000 years." />
        </div>
      </section>

      {/* Chef's Picks */}
      <section id="chef-recommendations">
        <h2 style={{ textAlign: "center", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "5rem", color: "rgb(243, 222, 61)" }}>
          Chef's Picks
        </h2>
        <div className="slider">
          {chefSlides.map((src, index) => (
            <div className="slide" key={src} style={{ transform: `translateX(${(index - sliderIndex) * 100}%)` }}>
              <img src={src} alt={`Chef's Pick ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      

      {/* Quiz Widget */}
      <section id="quiz-widget">
        <h2 style={{ fontSize: "3rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>Find Your Dish!</h2>
        <form id="quiz-form" onSubmit={handleQuizSubmit}>
          <div className="quiz-container">
            <label style={{ color: "#9b0505", fontWeight: 700, fontSize: "25px" }} htmlFor="quiz-question">
              What flavor do you prefer?
            </label>
            <select id="quiz-question" name="preference" value={quizPreference} onChange={(e) => setQuizPreference(e.target.value)}>
              <option value="spicy">Spicy</option>
              <option value="savory">Savory</option>
              <option value="sweet">Sweet</option>
            </select>
            <button type="submit" className="btn-primary">Get Your Dish</button>
          </div>
        </form>
        <div id="quiz-result">{quizResult}</div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 style={{ textAlign: 'center', color: 'rgb(97, 25, 3)' }}>Exciting Prizes Await You!</h2>
        <Link to="/play" className="btn-primary">Spin the Wheel</Link>
      </section>

      {/* Marquee Bar */}
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