import { useState, useRef, useEffect } from 'react'

// Criamos uma variável fora do componente para persistir entre recarregamentos
// Esta abordagem é específica para desenvolvimento e não afeta produção
let savedCounter = 0

export default function Counter () {
  const [counter, setCounter] = useState(() => {
    // Inicializa com o valor salvo ou 0
    return savedCounter || 0
  })

  // Usamos useEffect para atualizar o valor salvo quando o contador mudar
  useEffect(() => {
    savedCounter = counter
  }, [counter])

  function increment () {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <button
        type='button'
        onClick={increment}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Incrementar
      </button>
      <p>Edite este texto ou o estilo do botão para testar o Fast Refresh</p>
    </div>
  )
}
