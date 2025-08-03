import React, { useEffect, useRef } from 'react';
import '../styles/ourstory.css';

const OurStory = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleMouseEnter = () => {
      image.style.transform = 'scale(1.05)';
      image.style.transition = 'transform 0.3s ease';
    };

    const handleMouseLeave = () => {
      image.style.transform = 'scale(1)';
    };

    image.addEventListener('mouseenter', handleMouseEnter);
    image.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      image.removeEventListener('mouseenter', handleMouseEnter);
      image.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="our-story-page">
      <section className="our-story">
        <div className="container">
          <div className="story-header">
            <h2>Our Story</h2>
            <p>Discover the passion behind Yasaki.</p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>Yasaki's journey began not in the bustling streets of Mumbai but in the quiet charm of a small town in Japan...</p>
              <p>Keiko-san’s dream, however, faced an obstacle that many can relate to—financial constraints...</p>
              <p>Years later, inspired by her unfulfilled vision, her two grandchildren decided to carry her dream...</p>
              <p>At Yasaki, every dish is a tribute to her recipes, every detail a reflection of her wisdom...</p>
              <p>And every year on Christmas, Keiko-san travels to Mumbai to see her dream come alive...</p>
              <p>Yasaki isn’t just a restaurant; it’s a legacy of flavors, family, and fulfillment.</p>
            </div>
            <div className="story-image">
              <img ref={imageRef} src="/images/story/story.jpg" alt="Yasaki Restaurant" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="icons">
            <a href="#" className="footer-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="footer-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="footer-icon"><i className="fab fa-pinterest"></i></a>
          </div>
          <p>&copy; 2024 Yasaki. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OurStory;
