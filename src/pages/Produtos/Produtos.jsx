import React from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'
import Header from '../../components/Common/Header/Header'
import S from './Produtos.module.css'
import { listaProdutos } from '../../data/produtos'
const Produtos = ({ nome }) => {
  return (
    <div className={S.container}>
      <Header text='Produtos' />

      <section className={S.content}>
        {listaProdutos.map((produto) => {
          return (<CardProduct dados={produto} key={produto.id} />)
        })}
      </section>
    </div>
  )
}

export default Produtos