import React, { useState } from 'react';
import '../styles/menu.css';

const menuData = [
  {
    id: 'appetizers',
    title: 'Appetizers (前菜 | Zensai)',
    description: 'Start your meal with a burst of flavor! Our appetizers are crafted to tease your taste buds and set the stage for a delightful dining experience.',
    items: [
      {
        name: 'Gyoza (餃子)',
        description: 'Golden-brown pan-fried dumplings filled with minced meat (of choice) and vegetables, served with a tangy dipping sauce.',
        price: 600,
        image: '/public/images/menu/gyoza.avif',
      },
      {
        name: 'Natto (揚げ出腐)',
        description: 'Fermented soybeans with a unique texture and flavor, often served with rice or as a topping.',
        price: 500,
        dietary: 'Vegetarian',
        image: '/public/images/menu/natto.jpeg',
      },
      {
        name: 'Takoyaki (たこ焼き)',
        description: 'Fluffy octopus-filled dough balls topped with bonito flakes, seaweed, and special sauce.',
        price: 450,
        image: '/public/images/menu/takoyaki.png',
      },
    ],
  },
  {
    id: 'sushi',
    title: 'Sushi & Sashimi (寿司 | Sushi & 刺身 | Sashimi)',
    description: 'Savor the freshest seafood with our hand-crafted sushi and sashimi selection.',
    items: [
      {
        name: 'Salmon Nigiri',
        description: 'Delicate slices of salmon over perfectly seasoned sushi rice.',
        price: 700,
        image: '/public/images/menu/sashimi.avif',
      },
      {
        name: 'Dragon Roll',
        description: 'Shrimp tempura, avocado, and eel drizzled with unagi sauce.',
        price: 850,
        image: '/public/images/menu/Black-Dragon-Roll.webp',
      },
    ],
  },
  {
    id: 'ramen',
    title: 'Ramen (ラーメン | Rāmen)',
    description: 'Hearty and flavorful bowls of ramen to warm your soul.',
    items: [
      {
        name: 'Tonkotsu Ramen',
        description: 'Rich pork broth with tender chashu pork, soft-boiled egg, and noodles.',
        price: 800,
        image: '/public/images/menu/ramen3.png',
      },
      {
        name: 'Shoyu Ramen',
        description: 'Soy sauce-based broth with tender noodles and bamboo shoots.',
        price: 750,
        image: '/public/images/menu/Shoyu ramen.png',
      },
    ],
  },
  {
    id: 'main-courses',
    title: 'Main Courses',
    description: 'Indulge in our signature main courses, crafted with the finest ingredients.',
    items: [
      {
        name: 'Teriyaki Chicken',
        description: 'Grilled chicken glazed with sweet and savory teriyaki sauce.',
        price: 750,
        image: '/public/images/menu/chicken teriyaki.webp',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts (デザート | Dezāto)',
    description: 'End your meal on a sweet note with our decadent desserts.',
    items: [
      {
        name: 'Mochi Ice Cream',
        description: 'Chewy mochi filled with creamy ice cream.',
        price: 300,
        image: '/public/images/menu/fruit mochi.png',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks (飲み物 | Nomimono)',
    description: 'Complement your meal with our refreshing beverages.',
    items: [
      {
        name: 'Green Tea',
        description: 'A warm, soothing cup of traditional Japanese green tea.',
        price: 200,
        image: '/public/images/menu/matcha.jpg',
      },
    ],
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="menu-page">
      <div className="back-button-container">
        <button onClick={() => window.history.back()}>⬅ Back to Homepage</button>
      </div>

      <div className="menu-heading">
        <h1>MENU</h1>
      </div>

      <div className="button-container">
        <button>Menu</button>
        {menuData.map(section => (
          <button key={section.id} onClick={() => document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' })}>
            {section.title.split(' ')[0].includes('Sushi') ? '🍱' : section.title.includes('Appetizers') ? '🥟' :
             section.title.includes('Ramen') ? '🍜' : section.title.includes('Main') ? '🍣' :
             section.title.includes('Desserts') ? '🍰' : '🥤'}{section.title.split(' ')[0]}
          </button>
        ))}
      </div>

      <p className="menu-socialmedia">
        Check out our menu, and follow us on social media to hear about monthly specials and other exciting offerings.
      </p>

      <div className="button-container">
        <button>Order Now</button>
      </div>

      <p className="reservations">
        Reservations available, and we always welcome walk-ins. For groups larger than 4 guests, please reach out to us directly at +91 24521 45821
      </p>

      {menuData.map(section => (
        <div className="menu-section" key={section.id} id={section.id}>
          <div className={section.id}><h2>{section.title}</h2></div>
          <p className="about-menu-sections">{section.description}</p>
          {section.items.map((item, idx) => (
            <div className="menu-item" key={idx}>
              <div className="menu-item-text">
                <h3>{item.name}</h3>
                <p className="description">{item.description}</p>
                {item.dietary && <p className="dietary-info">Dietary Info: {item.dietary}</p>}
                <p className="price">₹{item.price}</p>
              </div>
              <img src={item.image} alt={item.name} />
              <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}

      <div className="cart-summary">
        <h2>Your Cart</h2>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeFromCart(index)}>❌</button>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total: ₹{getTotal()}</p>
        <button className="pay-now" onClick={() => {
          if (cart.length === 0) {
            alert('Your cart is empty!');
          } else {
            alert(`Thank you for your purchase! Your total is ₹${getTotal()}`);
            setCart([]);
          }
        }}>Pay Now</button>
      </div>
    </div>
  );
};

export default Menu;
