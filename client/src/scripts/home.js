// client/src/scripts/home.js

export function setupHomeInteractions() {
  // Live Welcome Message
  const welcomeMessage = document.getElementById("welcome-message");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  if (welcomeMessage) {
    welcomeMessage.innerHTML = `こんにちは! Welcome to Yasaki. It’s ${days[today.getDay()]}, and we’re excited to serve you!`;
  }

  // Interactive Heading
  const heading = document.getElementById("interactive-heading");
  const onMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 50;
    const y = (e.clientY / window.innerHeight - 0.5) * 50;
    if (heading) {
      heading.style.transform = `translate(${x}px, ${y}px)`;
    }
  };
  document.addEventListener("mousemove", onMouseMove);

  // Chef’s Picks Slider
  let sliderIndex = 0;
  const slides = document.querySelectorAll(".slider .slide");
  const rotateSlider = () => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - sliderIndex)}%)`;
    });
    sliderIndex = (sliderIndex + 1) % slides.length;
  };
  const intervalId = setInterval(rotateSlider, 3000);

  // Hidden Sushi Click
  const hiddenSushi = document.getElementById("hidden-sushi");
  if (hiddenSushi) {
    hiddenSushi.style.display = "block";
    hiddenSushi.addEventListener("click", () => {
      alert("You found the hidden sushi! Enjoy a free dessert on your first reservation!");
    });
  }

  // Quiz Widget
  const quizForm = document.getElementById("quiz-form");
  const quizResult = document.getElementById("quiz-result");
  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const preference = document.getElementById("quiz-question").value;
      if (preference === "spicy") {
        quizResult.textContent = "You should try Spicy Tuna Roll!";
      } else if (preference === "savory") {
        quizResult.textContent = "How about Teriyaki Chicken Bento?";
      } else {
        quizResult.textContent = "Matcha Cheesecake is perfect for you!";
      }
    });
  }

  return () => {
    document.removeEventListener("mousemove", onMouseMove);
    clearInterval(intervalId);
  };
}
