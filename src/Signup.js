import React, {useState} from 'react'
import axios from 'axios'
import Constant from './Constant.json'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [ signupProcessState, setSignupProcessState ] = useState("idle");


  const navigate = useNavigate();

 const handleSignupSubmit = async (event) => {
   event.preventDefault();
   setSignupProcessState('processing');
   
  try {
     const result = await axios.post(Constant.API_ADDRESS + '/registerBasic',
      {
         username: event.target.username.value,
         password: event.target.password.value,
      });

     console.log(result);

     setSignupProcessState('signupsuccess');
     setTimeout(() => {
     navigate('/login', { replace: true });
     }, 1500);
    
    } catch (error) {
      console.error(error);
      setSignupProcessState('signupfailure')
    }
  };

 let signupUIControls = null;
 switch(signupProcessState) {
   case "idle":
     signupUIControls = <button type='submit'>Sign in</button>
      break;

      case "processing":
      signupUIControls = <span style={{color: 'blue'}}>Processing signup...</span>
      break;

    case "success":
      signupUIControls = <span style={{color: 'green'}}>User created</span>
      break;

    case "error":
      signupUIControls = <span style={{color: 'red'}}>Error</span>
      break;

    default:
      signupUIControls = <button type="submit">Sign up</button>

 }



  return (
    <div>

    <form onSubmit={handleSignupSubmit}>
     <div>
       Username <br/>
       <input type='text' name='username' />
     </div>
    <div>
      Email <br/>
      <input type='text' name='email' />
    </div>  
      <div>
         Password <br/>
       <input type='text' name='password' />
    </div>
    <div>
        { signupUIControls }
     </div>
   </form>
 </div>

  )
}