import {useState, useEffect} from 'react'

const ItemCount = ({stock, onAdd}) => {
    
    const [count, setCount]= useState(1)
   
    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if(count < stock){

            setCount (count + 1)
        }
    }

  return (
   <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
     <div>
        <button className='btn btn-danger' onClick={restar}>Quitar</button>
        <span  className='btn btn-outline-dark'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>Agregar</button>
    </div>
     <button className='btn btn-primary' onClick={()=>onAdd(count)} >Cargar al carrito</button>
   </div>
  )
}

export default ItemCount