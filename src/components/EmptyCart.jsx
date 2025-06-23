import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{padding:'2rem'}}>
        <h2>No hay productos en tu carro 🛒🦜</h2>
        <h4>← Por favor, elija un producto antes de continuar ←</h4>
        <Link className='btn btn-danger' to='/'>Volver a la pagina Principal </Link>
    </div>
  )
}

export default EmptyCart