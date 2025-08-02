import React, { useEffect, useState, useRef } from 'react';
import '../styles/newsletter.css';

const Newsletter = () => {
  const pagesRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(0);

  const showPage = (index) => {
    pagesRef.current.forEach((page, i) => {
      if (page) {
        page.style.transform = i <= index ? 'rotateY(0deg)' : 'rotateY(-180deg)';
      }
    });
  };

  useEffect(() => {
    showPage(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < pagesRef.current.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="newsletter-page">
      <div className="newsletter-container">
        <div className="newsletter-header">
          <h1>YASAKI MONTHLY SCOOP</h1>
          <p>Stay updated with our latest events, special menus, and exciting news!</p>
        </div>

        <div className="newsletter">
          {[
            {
              title: 'Tategaki Welcomes You!',
              content: (
                <p>
                  We’ve got exciting news for you this month! Dive into our latest updates, festive
                  specials, and exclusive behind-the-scenes moments. Flip through and enjoy!
                </p>
              ),
            },
            {
              title: 'Upcoming Events',
              content: (
                <ul>
                  <li><b>Sushi Making Workshop:</b> Learn the art of sushi on December 5th. It’s fun for all ages!</li>
                  <li><b>Christmas Eve Dinner:</b> A six-course Japanese feast awaits you on December 24th.</li>
                  <li><b>New Year’s Eve Celebration:</b> Ring in 2025 with sushi, cocktails, and live music!</li>
                  <li><b>Spring Festival Celebration:</b> A special evening celebrating Japanese culture in April.</li>
                  <li><b>Charity Gala:</b> Join us for an exclusive event in May to support local causes.</li>
                </ul>
              ),
            },
            {
              title: 'Featured Dish: Wagyu Ramen',
              content: (
                <>
                  <img src="/images/newsletter/wagyu.jpg" alt="Wagyu Ramen" />
                  <p><b>Wagyu Ramen Delight:</b> A perfect blend of savory broth, premium Wagyu beef, and fresh<br /> noodles. This dish is a limited-time special!</p>
                </>
              ),
            },
            {
              title: 'Behind the Scenes',
              content: (
                <>
                  <p>This month, we spotlight Chef Takeshi, who brings over 20 years of culinary mastery. He shares his passion for Japanese cuisine and his favorite dishes. Here’s a sneak peek<br /> into his process of creating authentic flavors.</p>
                  <img src="/images/newsletter/takeshi.jpg" alt="Chef Takeshi at work" />
                </>
              ),
            },
            {
              title: 'Seasonal Specials',
              content: (
                <ul>
                  <li><b>Chestnut Mochi:</b> A sweet, soft dessert with roasted chestnut filling.</li>
                  <li><b>Matcha Latte:</b> Our winter classic is back — warm, frothy, and comforting.</li>
                  <li><b>Kabocha Tempura:</b> Crispy and golden pumpkin, a perfect winter appetizer.</li>
                  <li><b>Sake Tasting Nights:</b> A new selection of premium sake every Friday evening.</li>
                </ul>
              ),
            },
            {
              title: 'What Our Customers Are Saying',
              content: (
                <>
                  <p><i>"The shrimp here is the best I’ve ever had!"</i> - Kanish, Asr</p>
                  <p><i>"The spring dinner was beyond expectations."</i> - Jayati, Ldh</p>
                  <p><i>"I absolutely loved the sushi-making class."</i> - Chat Gipita, Macpur</p>
                  <img src="/images/newsletter/sushi making.jpg" alt="Happy Customers" />
                </>
              ),
            },
          ].map((page, i) => (
            <div
              key={i}
              className={`page ${i === 0 ? 'front-page' : ''}`}
              ref={(el) => (pagesRef.current[i] = el)}
            >
              <h2>{page.title}</h2>
              {page.content}
            </div>
          ))}
        </div>

        <div className="controls">
          <button id="prev" className="nav-button" onClick={handlePrev}>&larr; Previous</button>
          <button id="next" className="nav-button" onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
