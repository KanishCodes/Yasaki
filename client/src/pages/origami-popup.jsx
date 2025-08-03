import React from 'react';
import '../styles/origami-popup.css';

const OrigamiPopUp = () => {
  return (
    <div className="origami-popup-page">
      <div className="heading">
        <h2>~ Know Japan! ~</h2>
      </div>

      <div className="more">
        <h3>Hover over the origami sheets to unfold them and learn interesting facts about Japanese Culture</h3>
      </div>

      <div className="container">
        {[
          {
            id: 1,
            title: 'Sushi Origins',
            fact: 'Sushi was originally a preservation method for fish using fermented rice!',
            img: 'images/origami/sushi.jpg'
          },
          {
            id: 2,
            title: 'Seaweed Benefits',
            fact: 'Seaweed is a superfood that is packed with vitamins, minerals, and fiber!',
            img: 'images/origami/seaweed.jpg'
          },
          {
            id: 3,
            title: 'Wasabi Origins',
            fact: 'Wasabi has been used in Japan for centuries, not just for flavor, but for its antibacterial properties!',
            img: 'images/origami/wasabi.jpg'
          },
          {
            id: 4,
            title: 'Japanese Rice',
            fact: 'Japanese rice is short-grain and sticky, perfect for sushi rolls!',
            img: 'images/origami/rice.jpg'
          },
          {
            id: 5,
            title: 'Chopsticks History',
            fact: 'Chopsticks have been used in Japan for over 5,000 years!',
            img: 'images/origami/chopstick.jpg'
          },
          {
            id: 6,
            title: 'Sushi Etiquette',
            fact: "It's rude to stick chopsticks upright in rice — it resembles a funeral ritual!",
            img: 'images/origami/manners.jpg'
          },
          {
            id: 7,
            title: 'Edible Paper',
            fact: 'Some sushi is wrapped in edible paper made from soybeans called "nori"!',
            img: 'images/origami/nori.jpg'
          },
        ].map(({ id, title, fact, img }) => (
          <div className="card" key={id}>
            <img src={img} alt={title} className="card-img" />
            <div className="card-info">
              <h3>{title}</h3>
              <div className="pop-up-info">
                <h4>Fun Fact</h4>
                <p>{fact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrigamiPopUp;
