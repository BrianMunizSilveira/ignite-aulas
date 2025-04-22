import { useState } from 'react'

export function Counter () {
  const [counter, setCounter] = useState(0)

  function increment () {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>Contador {counter}</h2>
      <button type='button' onClick={increment}>
        Incrementar
      </button>
    </div>
  );
}
