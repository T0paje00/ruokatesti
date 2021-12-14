import React from 'react'
import { Link } from 'react-router-dom'

export default function SecuredHome() {
return (
 
  <div >
     <h1> Your Restaurant </h1>
   <div>
     <Link to="/restaurant"><button type='type'> Add Restaurant </button></Link>
  </div>
  
 
 </div>

  )
}