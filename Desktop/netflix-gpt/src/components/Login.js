import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm , setisSignInForm] = useState(true);
    const toggleSignInForm = () => {
            setisSignInForm(!isSignInForm);
    }
  return (
    <> 
       <div>
        <Header/> 
          <div className='absolute'>
    
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
       </div>
       <form className='p-12 bg-black absolute w-4/12 mx-auto right-0 left-0 my-24 text-white rounded-lg bg-opacity-80' action="">
            <h1 className='p-2 font-bold text-3xl'>{isSignInForm ?" Sign In ":"Sign Up" }</h1>
           {!isSignInForm && <input type="text" placeholder="Full Name " className='p-4 my-4 w-full bg-gray-500   '  />} 
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600' />
            <input type="password" placeholder="Password " className='p-4 my-4 w-full bg-gray-500   ' />
            <br />
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ?" Sign In ":"Sign Up" }</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ?" New to Netflix? Sign Up Now":"Already registered? Login here" }</p>
       </form>
       
       
       </div>
    </>

  )
}

export default Login