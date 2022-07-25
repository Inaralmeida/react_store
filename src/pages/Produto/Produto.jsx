import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Common/Header/Header'

const Produto = ({ estaLogado }) => {
  const params = useParams()
  return (
    <div>
      <Header text='Produto' />
      <h1>nome do produto: {params.nome}</h1>
      <button
        onClick={() => console.log('oi')}
        disabled={estaLogado ? false : true}
      >Comprar</button>
    </div>
  )
}

export default Produto