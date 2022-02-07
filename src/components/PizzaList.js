import React from "react"
import Pizza from "./Pizza"

function PizzaList({ pizzas, onSelectPizza }) {
  const pizzaList = pizzas.map(pizza => (
    <Pizza key={pizza.id} pizza={pizza} onSelectPizza={onSelectPizza} />
  ))
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>{pizzaList}</tbody>
    </table>
  )
}

export default PizzaList
