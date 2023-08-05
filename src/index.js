import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div class="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Pizza(props) {
  return (
    <li className="pizza" key={props.name}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
        <span>${props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(currentHour, openHour, closeHour, isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {closeHour}:00! Come visit us or Order Online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We are closed! We will opne at {openHour}:00</p>
      )}
    </footer>
  );
}

// For react 18+

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For React <18

// import ReactDOM from 'react-dom';
// React.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
