import React from 'react'
import { BrowserRouter, Route, Routes as Siwtch } from 'react-router-dom'
import Login from './pages/Login/Login'
import Produtos from './pages/Produtos/Produtos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Siwtch>
        <Route path='/' element={<Login />} />
        <Route path='/produtos' element={<Produtos />} />
      </Siwtch>
    </BrowserRouter>
  )
}

export default Routes