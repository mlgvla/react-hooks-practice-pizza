import React, { useState, useEffect } from "react"
import Header from "./Header"
import PizzaForm from "./PizzaForm"
import PizzaList from "./PizzaList"

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(res => res.json())
      .then(data => setPizzas(data))
  }, [])

  function handleChangeForm(name, value) {
      setSelectedPizza({...selectedPizza, [name]: value})
      console.log(selectedPizza)
  }
  function handleUpdatePizza() {
    const updatedPizzas = pizzas.map(pizza => {
        if (pizza.id === selectedPizza.id) {
            return selectedPizza
        } else {
            return pizza
        }
    })
    setPizzas(updatedPizzas)
  }
  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onChangeForm={handleChangeForm} onUpdatePizza={handleUpdatePizza}/>
      <PizzaList pizzas={pizzas} onSelectPizza={setSelectedPizza} />
    </>
  )
}

export default App
