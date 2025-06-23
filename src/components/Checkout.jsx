import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Checkout = () => {
    
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

    console.log(errors, 'errors')
    const finalizarCompra = (dataDelForm)=>{
        let orden = {
            comprador:{
                name:dataDelForm.name,
                address:dataDelForm.address,
                email:dataDelForm.email
            },
            compras:cart,
            total:cartTotal(),
            date:serverTimestamp()
        }
        
        const ventas = collection(db, "orders")

        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
           clear()
        })
       .catch((error)=> console.log(error))
       }
    

  return (
   <>
   {
    orderId 
        ?  <div>
            <h2>Thank you so much! Su compra fue exitosa 🦜✔</h2>
            <h2>El id de su compra es:{orderId}</h2>
            <Link to='/' className='btn btn-danger'>Seguir comprando</Link>
           </div>
        
        : <div>
       <h1>Completa con tus datos</h1> 
       <form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={handleSubmit(finalizarCompra)}>
        <input className='form-control' placeholder='Complete con su nombre completo (min 6 letras)' type="text" name='name' {...register("name",{required:true, minLength:6})}/>
        {errors?.name?.type === "required" && <span style={{color:'red'}}>Este campo esta incompleto</span>}
        {errors?.name?.type === "minLength" && <span style={{color:'red'}}>Est campo no cumple con el minimo de caracteres</span>}
        <input className='form-control' type="text" placeholder='Complete con su direccion de envio (min 6 letras) ' name='address' {...register("address",{required:true, minLength:6})}/>
        {errors?.address?.type === "required" && <span style={{color:'red'}}>Este campo esta incompleto</span>}
        {errors?.address?.type === "minLength" && <span style={{color:'red'}}>Est campo no cumple con el minimo de caracteres</span>}
        <input className='form-control' type="email" placeholder='Complete con su correo' name='email' {...register("email",{required:true})} />
        {errors?.email?.type === "required" && <span style={{color:'red'}}>Este campo esta incompleto</span>}
        <input className='form-control' type="email" placeholder='Repita su correo' name='email2' {...register("secondemail",{required:true, validate:{equalsMails: (email2) => email2 === getValues().email}})}/>
        {errors?.email2?.type === "required" && <span style={{color:'red'}}>Este campo esta incompleto</span>}
        {errors?.secondemail?.type === "equalsMails" && (<span style={{ color: 'red' }}>Las direcciones de email son distintas</span>
)}
        <button className='btn btn-success' type='submit'>Finalizar Compra</button>
       </form>
    </div>
   }
   </>
  )
}

export default Checkout