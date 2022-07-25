import React, { useContext } from 'react'
import Header from '../../components/Common/Header/Header'
import { UserContext } from '../../context/UserProvider'
import S from './Login.module.css'
const Login = () => {
  const context = useContext(UserContext)
  console.log(context);
  return (
    <div className={S.container}>
      <Header text='Login' />
      <div className={S.content}>

        <form action="">
          <fieldset>
            <label htmlFor="">Nome</label>
            <input type="text"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Senha</label>
            <input type="password" name="" id="" />
          </fieldset>

          <button onClick={(e) => {
            e.preventDefault()
          }}>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login