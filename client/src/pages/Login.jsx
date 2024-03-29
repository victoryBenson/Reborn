import React, { useEffect, useState } from 'react'
import {Link, Outlet, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { validateEmail } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../redux/features/auth/authActions';
import { Reset_Auth } from '../redux/features/auth/authSlice';
import { Logo } from '../component/Logo';

const initialState = {
    email: "",
    password: "",
}

export const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const {email, password} = formData;
  const { isLoading, isError, errMessage, isLoggedIn, isSuccess} = useSelector((state) => state.auth); 
  const navigate = useNavigate();
  const dispatch = useDispatch()
  

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value})
  }


  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
        email,
        password
    }

    userData.email = userData.email.toLowerCase();

    await dispatch(loginUser(userData))

};

    useEffect(() => {
        if(isLoggedIn && isSuccess){
            navigate('/')
        } else {
            dispatch(Reset_Auth())
        }
    }, [isLoggedIn, isSuccess, navigate, dispatch])
    

  return (
    <div className='relative flex justify-center items-center mx-auto h-screen'>
        <div className='bg-hero2 fixed top-0 h-screen right-0 left-0 '>
            <span className='bg-black/60 fixed top-0 h-screen right-0 left-0 blur-[2px]'></span>
        </div>
        <div className='z-20 bg-ivory/20 md:w-1/2 w-full mx-2 text-ivory rounded-lg shadow p-4 transition-all '>
            <div className='text-2xl text-center my-7 font-bold flex flex-wrap items-center justify-center'><Logo/></div>
            <h1 className='text-xl text-center font-bold'>Welcome back!</h1>
            <p className='p-2 text-center'>Login into your account for full access.</p>
            <div className='max-w-lg m-auto'>
                <form onSubmit={handleLogin} className='flex flex-col gap-4' >
                    <div>
                        <label className='p-2'>Enter Email:</label>
                        <input type="email" 
                            name="email"
                            value={email} 
                            className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                            placeholder='example@gmail.com' 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className='p-2'>Enter Password:</label>
                        <input type="password" 
                            name="password" 
                            value={password}
                            className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                            placeholder='enter your password' 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='text-right'>
                        <span className='text-ivory'>forgot password?</span>
                    </div>
                    {/* error message */}
                    <p className='text-red text-center text-sm'>{errMessage}</p>
                    <div >
                        <button disabled={isLoading} className='w-full p-3 from-lightBrown to-brown bg-gradient-to-r text-ivory hover:opacity-80 disabled:opacity-70  hover:font-bold transition-all duration-200 rounded-lg text-center gap-2'>
                            { isLoading? 'Loading...Please wait!' : 'LOGIN'}
                        </button>
                    </div>
                    <p className='text-blue underline mx-auto text-sm'>continue with google</p>
                    {/* <OAuth/> */}
                </form>
            </div>
            <div className='flex items-center gap-2 mx-auto p-5 text-center'>
                <p>new here? Create account</p>
                <Link to={`/register`}>
                    <p className='hover:underline font-bold hover:font-extrabold'>register</p>
                </Link>
            </div>
        </div>
    </div>
    
  )
}