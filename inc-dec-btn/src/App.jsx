import React, { useState } from 'react'
import './App.css'
import CatFacts from './CatFacts';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1)
  }

  const plus3 = () => {
    setCount(prev => (prev + 3))
  }

  const jump5 = () => {setCount(count + 5)}

  const reset = () => {setCount(0)}

  return (
    <>
    <div className='calc'>
      <h1>{count}</h1>
      <div className='btn'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={jump5}>+5</button>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={plus3}>Plus 3</button>
    </div>

    <CatFacts />
    </>
  )
}

export default App