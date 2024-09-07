import { useState } from 'react';
import './styles.css';

export default function Home() {
  const [nota, setNota] = useState<string>('')
  const [notas, setNotas] = useState<number[]>([])
  const [resultado, setResultado] = useState<number>(0)

  function handleAddNota() {
    if (nota === "") return alert('O valor não deve ser vazio')

    setNotas((prev) => [...prev, Number(nota)])

    setNota('')
  }

  function handleCalculate() {
    if (notas.length < 2) return alert('É necessário inserir duas notas para calcular a média')

    const total = notas.reduce((prev, current) => {
      return prev + current
    }, 0)

    setResultado(total / notas.length)
  }


  function handleClear() {
    setNota('')
    setNotas([])
    setResultado(0)
  }

  return (
    <main>
      <div className='container'>
        <h1>Grade Average</h1>

        <input
          type='number'
          value={nota}
          onChange={(event) => setNota(event.target.value)}
          placeholder='Digite um número'
        />

        <button onClick={handleAddNota}>Adicionar</button>
        {
          notas.length > 0 ? (
            < div className='notas'>
              {notas.map((nota) => (
                <span key={nota}>({nota}) </span>
              ))}
            </div>
          ) : null
        }

        <div className='actions'>
          <button onClick={handleCalculate}>Calcular Média</button>
          <button onClick={handleClear}>Limpar</button>
        </div>

        {
          resultado ? <p className='result'>Sua média é ({resultado})</p> : null
        }
      </div>
    </main >
  );
}
