import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import S from './Header.module.css'

const Header = ({ text }) => {
  return (

    <div className={S.container}>
      <Title text={text} />
      <nav>
        <Link className={S.link} to='/' >Login</Link>
        <Link className={S.link} to='/produtos' > Produtos</Link>
      </nav>
    </div>
  )
}

export default Header