import React, { useEffect, useState } from "react";
import "../styles/meetus.css"; // Make sure this path matches your project structure

function MeetUs() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = getTimeLeft();
      setTimeLeft(updatedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const eventDate = new Date("2024-12-15T15:00:00").getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    if (gap <= 0) {
      return "Event is Live!";
    }

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    return {
      days: String(Math.floor(gap / day)).padStart(2, "0"),
      hours: String(Math.floor((gap % day) / hour)).padStart(2, "0"),
      minutes: String(Math.floor((gap % hour) / minute)).padStart(2, "0"),
      seconds: String(Math.floor((gap % minute) / second)).padStart(2, "0"),
    };
  }

  return (
    <div className="meetus-page">
      {/* Header Section */}
      <header className="header-section">
        <div className="team-photo">
          <h1 className="main-heading">Meet Our Team</h1>
        </div>
      </header>

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="countdown-left">
          <h2>Sushi Making Workshop with Chef Hiro</h2>
          <p style={{ fontSize: "2.5rem", color: "#350667", fontWeight: "bolder" }}>goes live in</p>
          <div id="countdown-timer">
            {typeof timeLeft === "string" ? (
              <span>{timeLeft}</span>
            ) : (
              <>
                <span>{timeLeft.days}</span> Days{" "}
                <span>{timeLeft.hours}</span> Hours{" "}
                <span>{timeLeft.minutes}</span> Minutes{" "}
                <span>{timeLeft.seconds}</span> Seconds!
              </>
            )}
          </div>
        </div>
        <div className="countdown-right">
          <img src="/images/meetUs/yellow.jpg" alt="Event" />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Master Chefs</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/images/meetUs/chefone.avif" alt="Chef Hiro" />
            <h3>Chef Hiro</h3>
            <p>
              Master of Ramen and Japanese delicacies. With over 20 years of experience,
              Chef Hiro brings authentic flavors to Yasaki.
            </p>
          </div>
          <div className="team-member">
            <img src="/images/meetUs/cheftwo.jpg" alt="Chef Ayaka" />
            <h3>Chef Ayaka</h3>
            <p>
              A sushi artisan and dessert connoisseur. Chef Ayaka is known for her artistic
              touch and meticulous attention to detail.
            </p>
          </div>
          <div className="team-member">
            <img src="/images/meetUs/chefsthree.jpg" alt="Chef Takumi" />
            <h3>Chef Takumi</h3>
            <p>
              An expert in fusion cuisine, Chef Takumi blends traditional Japanese flavors
              with modern techniques to create unforgettable dishes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Copyright © 2024 Yasaki. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default MeetUs;
