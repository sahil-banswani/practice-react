import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    counter += 1
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter > 0) {
      counter -= 1
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Couter value : {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
