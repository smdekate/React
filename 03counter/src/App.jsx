
import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const increaseVal = () => {
    if (counter < 20)
    setCounter(counter + 1)
  }
  const decreaseVal = () => {
    if (counter > 0)
    setCounter(counter - 1)
  }
  

  return (
    <>
      <h1>Hello, World!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseVal}>increase counter {counter}</button>
      <br />
      <br />
      <button onClick={decreaseVal}>decrease counter {counter}</button>

      <p>counter: {counter}</p>
    </>
  )
}

export default App
