import React, { useState } from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import Produto from './pages/Produto/Produto'
import Produtos from './pages/Produtos/Produtos'

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Login />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/produto/:nome' element={<Produto />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes