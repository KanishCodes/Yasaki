import React, { useEffect } from 'react';
import '../styles/studio.css';

const Studio = () => {
  useEffect(() => {
    const galleryItems = document.querySelectorAll('.studio-page .gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });
    });

    return () => {
      galleryItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="studio-page">
      
      <section className="gallery-section">
        <h1 className="gallery-title">Our Gallery</h1>
        <p className="gallery-description">
          A glimpse into the Yasaki experience. Indulge in the beauty of Japanese cuisine and culture through our curated collection of images.
        </p>
        <div className="gallery-container">
          {[
            "img gallery 1.jpg",
            "img gallery 8.jpg",
            "img gallery 3.jpg",
            "img gallery 6.jpg",
            "img gallery 5.jpg",
            "img gallery 4.jpg",
            "img gallery 7.jpg",
            "img gallery 2.jpg",
            "img gallery 10.jpg",
            "img gallery 9.jpg"
          ].map((img, index) => (
            <div className="gallery-item tall" key={index}>
              <img src={`/images/studio/${img}`} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

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
    </div>
  );
};

export default Studio;
