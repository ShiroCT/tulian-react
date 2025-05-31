import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({prod}) => {
  return (
    <div className="card" style={{width: '18rem', alignSelf:'center', marginTop:5}}>
  <img src={prod.img} className="card-img-top" alt={prod.name}/>
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">Precio =${prod.price},00</p>
    <Link to={`/item/${prod.id}`} className="btn btn-danger">Ver más</Link>
  </div>
</div>
  )
}

export default Item