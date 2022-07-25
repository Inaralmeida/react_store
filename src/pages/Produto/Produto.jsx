import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()
  console.log(params);
  return (
    <div>nome do produto</div>
  )
}

export default Produto