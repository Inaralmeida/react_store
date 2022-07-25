import React from 'react'
import Header from '../../components/Common/Header/Header'
import S from './Login.module.css'
const Login = () => {
  return (
    <div className={S.container}>
      <Header text='Login' />
      <div className={S.content}>

        <form action="">
          <fieldset>
            <label htmlFor="">Email</label>
            <input type="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="">Senha</label>
            <input type="password" name="" id="" />
          </fieldset>

          <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login