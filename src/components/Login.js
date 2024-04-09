import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
       <div className='bg-white p-4 px-6 rounded w-35'>
          <form action="" >
              <div className='mb-3'>
                 <label htmlFor='email'><strong>Email</strong></label>
                 <input type="email" name='email' placeholder='Enter Email'  className='rounded-0 form-control'/>
                <span className='text-danger'></span>
              </div>
              <div className='mb-3'>
                 <label htmlFor='password'><strong>Password</strong></label>
                 <input type="password" name='password' placeholder='Enter Password'  className='rounded-0 form-control'/>
                 <span className='text-danger'></span>
              </div>
              <button type='submit' className='btn btn-success w-100 mt-2'>Log in</button>
              <Link to='/signup' className='btn btn-default border mt-4 w-100 bg-light p-2 text-decoration-none'>New User?Create Account</Link>
          </form>
       </div>
    </div>
    )
}

export default Login
