import React from 'react'
import axios from 'axios'
import Constant from './Constant.json'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate();
   
  const handleLoginSubmit = async (event) => {
   event.preventDefault();
  
    try {
     const result = await axios.post(
      Constant.API_ADDRESS + '/managerLogin',
       null,
     {
       auth:  {
        username: event.target.username.value,
        password: event.target.password.value
        }
       }
     );
     console.log(result) 
     const receivedJWT = result.data.token;
     

     navigate('/securedhome', { replace: true });

    } catch(error) {
      console.error(error);
    }
 }

 
return (
    <>
     <form onSubmit= { handleLoginSubmit }>
      <div>
        Username<br/>
        <input type='text' name='username'/>
      </div>

    <div>
      Password<br/>
      <input type='text' name='password' />
    </div>
    <div>
      <button type='submit'>Log In</button>
    </div>
     </form>


  </>

  )
}