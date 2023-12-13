import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [pizzas, setPizzas] = useState([])
  const [basket, setBasket] = useState([])
  const [basketOpen, setBasketOpen] = useState(false)
  const navigate = useNavigate()
  function addToBasket(pizza) {
    setBasket([...basket, pizza])
  }
  function seeBusket() {
    setBasketOpen(true)
  }
  function closeBasket() {
    setBasketOpen(false)
  }
  function remo(pizza) {
    basket.splice(basket.indexOf(pizza), 1)
    setBasket([...basket])
  }
  function logout() {
    navigate("/login")
  }
  useEffect(() => {
   setPizzas([
    {
      name: "Margherita",
      ingredients: "Tomato, mozzarella, basil",
      price: 12.99,
      image: "pizza1.jpg"
    },
    {
      name: "Pepperoni",
      ingredients: "Pepperoni, tomato sauce, mozzarella",
      price: 14.99,
      image: "pepperoni-pizza.jpg"
    },
    {
      name: "Veggie",
      ingredients: "Tomato, peppers , mushrooms, eggplant, onions ",
      price: 16.99,
      image: "veggie.pizza.jpg"
    },
    {
      name: "Hawaiian",
      ingredients: "Tomato, mozzarella, pineapple, ham",
      price: 13.99,
      image: "Hawaiian-pizza.jpg"
    },
    {
      name: "Buffalo ",
      ingredients: "Tomato, mozzarella, buffalo sauce, spicy",
      price: 15.99,
      image: "Pizza-Buffalo.jpg"
    }
   ])
  }, [])
  return (
    <div>
      <header>
        <div class="title">Pizzeria Online Shop</div>
       <div id="basket-count">{basket.length}</div>
        <div id="basket-icon" onClick={seeBusket}>&#128722;</div>
        <button onClick={closeBasket}> All pizzas</button>
        <button onClick={logout}>Logout</button>
    </header>

    <div id="body-container">
      {basketOpen == false ?  pizzas && pizzas.map((pizza) => (
          <div class="pizza">
          <img src={pizza.image} alt={pizza.image}/>
          <div class="pizza-name">{pizza.name}</div>
          <div class="pizza-ingredients">{pizza.ingredients}</div>
          <div class="pizza-price">{pizza.price}</div>
          <button onClick={() => addToBasket(pizza)}>Add to basket</button>
      </div>)) : basket && basket.map((pizza) => (
        <div class="pizza">
        <img src={pizza.image} alt={pizza.image}/>
        <div class="pizza-name">{pizza.name}</div>
        <div class="pizza-ingredients">{pizza.ingredients}</div>
        <div class="pizza-price">{pizza.price}</div>
        <button onClick={() => remo(pizza)}>Remove from basket</button>
    </div>))}
       
    </div>
      <footer>
              
        <div id="footer">
            <div id ="tel">
                <p>Tel☎: 06 70 333 9993</p>
            </div>
            <div id = "email">
                <p>@Email:pizzaria@afp.com</p>
            </div>
          </div>
    </footer>
    </div>
  )
}
