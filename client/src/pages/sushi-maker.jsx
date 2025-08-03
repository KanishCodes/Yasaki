import React, { useRef, useEffect } from 'react';
import '../styles/sushi-maker.css';

const ingredients = [
  { id: 'rice', symbol: '🍚' },
  { id: 'seaweed', symbol: '🌿' },
  { id: 'fish', symbol: '🐟' },
  { id: 'cucumber', symbol: '🥒' },
  { id: 'wasabi', symbol: '🌶' },
  { id: 'avocado', symbol: '🥑' },
];

const SushiMaker = () => {
  const plateRef = useRef(null);

  useEffect(() => {
    const plate = plateRef.current;

    const allowDrop = (e) => {
      e.preventDefault();
    };

    const drop = (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData('text/plain');
      const ingredient = document.getElementById(data);
      if (!ingredient) return;

      const clone = ingredient.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.top = `${e.nativeEvent.offsetY - 15}px`;
      clone.style.left = `${e.nativeEvent.offsetX - 15}px`;

      plate.appendChild(clone);

      plate.classList.add('dropover');
      setTimeout(() => plate.classList.remove('dropover'), 500);
    };

    plate.addEventListener('dragover', allowDrop);
    plate.addEventListener('drop', drop);

    return () => {
      plate.removeEventListener('dragover', allowDrop);
      plate.removeEventListener('drop', drop);
    };
  }, []);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div className="sushi-maker-page">
      <h1><b>MAKE SUSHI <br />YOUR WAY</b></h1>

      <div className="ingredients">
        {ingredients.map(({ id, symbol }) => (
          <div
            key={id}
            id={id}
            className="ingredient"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, id)}
          >
            <b>{symbol}</b>
          </div>
        ))}
      </div>

      <div className="plate" ref={plateRef}>
        <p>Create Your Perfect Roll—Just Drop the Ingredients!</p>
      </div>
    </div>
  );
};

export default SushiMaker;
