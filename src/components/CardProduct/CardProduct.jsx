import React from 'react'
import S from './CardProduct.module.css'
import { Link } from 'react-router-dom'
const CardProduct = ({ dados }) => {
  const { id, nome, foto, precoAntigo, preco, descricao } = dados
  console.log(foto);
  return (
    <div className={S.container}>
      <img src={foto} alt="" />
      <h3>{nome}</h3>
      <small>DE: <span> R${precoAntigo}</span></small>
      <p>Por <span>R${preco}</span></p>
      <Link className={S.link} to={`/produtos`}>Ver produto</Link>
    </div>
  )
}

export default CardProduct