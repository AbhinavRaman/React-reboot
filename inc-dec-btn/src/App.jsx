import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1)
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
    </div>
    </>
  )
}

export default App