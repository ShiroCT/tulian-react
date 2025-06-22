import React from 'react'
import { BounceLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <BounceLoader color="red" size={100}/>
    </div>
  )
}

export default LoaderComponent