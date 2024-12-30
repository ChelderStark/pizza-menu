import React from 'react';
import './index.css';
import { pizzaData } from './data';


function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cusine. Creative dishes to choose from all from our stone oven, 
            all organic and all delicios
          </p>

          <ul className='pizzas'>
            {pizzas.map(pizza => (
              <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
          </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later.</p>}
    </main>
  )
}

function Pizza({pizzaObj}) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out': ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" :pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>
            We're open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className='btn'>Order</button>
        </div>
      ): <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>}
    </footer>
  )
  //? return React.createElement('footer', null, "We're currently open!")
}


export default App;
