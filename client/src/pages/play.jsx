import React, { useEffect } from 'react';
import '../styles/play.css';
import { Link } from 'react-router-dom';

const Play = () => {
  useEffect(() => {
    const gameCards = document.querySelectorAll('.game-card');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.2 }
    );

    gameCards.forEach(card => observer.observe(card));

    return () => {
      gameCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="play-page">
      <header className="play-header">
        <div className="header-container">
          <h1 className="page-title">Play Games</h1>
        </div>
      </header>

      <section className="games-intro-section">
        <div className="container">
          <p className="intro-text">
            Take a break and enjoy some fun! We’ve got a variety of mini-games to keep you entertained.
            Challenge yourself, your friends, and have some fun!
          </p>
        </div>
      </section>

      <section className="games-section">
        <div className="container">
          <h2 className="section-title">Have fun! <br /> (more exciting games cooking soon)</h2>
          <div className="games-grid">
            {/* Game 1 */}
            <div className="game-card" data-animation="fade-in">
              <img src="/images/play/sushi making.jpg" alt="Sushi Maker" className="game-image" />
              <div className="game-description">
                <h3 className="game-title">Interactive Sushi Maker</h3>
                <p>Drag and drop ingredients to create your own sushi rolls! Choose rice, seaweed, fish, and vegetables to roll your sushi.</p>
                <Link to="/sushi-maker" className="game-button">Play Now</Link>
              </div>
            </div>

            {/* Game 2 */}
            <div className="game-card" data-animation="slide-in">
              <img src="/images/play/origami.jpg" alt="Origami Pop-Ups" className="game-image" />
              <div className="game-description">
                <h3 className="game-title">Origami Pop-Ups</h3>
                <p>Hover or click on dishes to unfold cool facts with origami-style pop-ups!</p>
                <Link to="/origami-popup" className="game-button">Play Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="play-footer">
        <p className="footer-text">© 2024 Yasaki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Play;
