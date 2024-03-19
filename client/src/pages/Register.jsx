import React, { useState, useEffect} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { validateEmail } from '../utils';
import { toast } from 'react-toastify';
import { register } from '../redux/features/user/userAction';
import { RESET_AUTH } from '../redux/features/user/userSlice';
import { Logo } from '../component/Logo';

// import { OAuth } from '../Component/OAuth';

export const Register = () => {
    // const [accessToken, setAccessToken] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState("customer")
    const { isLoading, isError, errMessage, isSuccess} = useSelector((state) => state.user); 
    const navigate = useNavigate();
    const dispatch = useDispatch()
  

    const handleRole = (e) => {
        setRole(e.target.value)
    }

  const handleRegister = async (e) => {
    e.preventDefault();

      
    const userData = {
        username,
        email,
        password,
        role
    }

    userData.email = userData.email.toLowerCase();

    await dispatch(register(userData))

    if(isSuccess){
        navigate("/login")
    }
    
    dispatch(RESET_AUTH())
};


    // useEffect(() => {
    //     if(isSuccess == true){
    //     navigate("/login")
    //     }
    //     // dispatch(RESET_AUTH())
    // }, [])




  return (
    <div className='relative flex justify-center items-center mx-auto h-screen'>
        <div className='bg-hero2 fixed top-0 h-screen right-0 left-0 '>
            <span className='bg-black/60 fixed top-0 h-screen right-0 left-0 blur-[2px]'></span>
        </div>
        <div className='z-20 bg-ivory/20 md:w-1/2 w-full mx-2 text-ivory rounded-lg shadow p-4 transition-all'>
            <div className='text-2xl text-center my-7 font-bold flex flex-wrap items-center justify-center'><Logo/></div>
                <h1 className='text-xl text-center font-bold'>Register now!</h1>
                <div className='max-w-lg m-auto'>
            <p className=' p-1 text-center'>Get access to members only content.</p>
            <form onSubmit={handleRegister} className='flex flex-col gap-4 ' >
                <div>
                    <label className='p-2'>Enter username:</label>
                    <input type="text" 
                        name="username"
                        value={username} 
                        className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                        placeholder='John Doe' 
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='p-2'>Enter email:</label>
                    <input type="email" 
                        name="email"
                        value={email} 
                        className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                        placeholder='example@gmail.com' 
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='p-2'>Enter Password:</label>
                    <input type="password" 
                        name="password" 
                        value={password}
                        className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                        placeholder='Create a Password' 
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className=''>
                    <label htmlFor="Role" className='block'>Select Role:</label>
                    <span className=''>
                        <input 
                            type="radio" 
                            name="role" 
                            value={`customer`} 
                            onChange={handleRole} 
                            checked={role === "customer"}
                        />
                        <label htmlFor="" className='px-1 font-bold'> Customer </label>
                    </span>
                    <span className='pl-2'>
                        <input 
                            type="radio" 
                            name="role" 
                            value={`admin`} 
                            onChange={handleRole} 
                            checked= {role === "admin"} 
                        />
                        <label htmlFor="" className='px-1 font-bold'>Admin</label>
                    </span>
                </div>
                {/* error message */}
                <p className='text-red mx-auto'>{isError && errMessage}</p>
                <div >
                    <button disabled={isLoading} className='w-full p-3  from-lightBrown to-brown bg-gradient-to-r text-ivory hover:opacity-80 disabled:opacity-70  hover:font-bold transition-all duration-200 rounded-lg text-center gap-2'>
                        { isLoading? 'Loading...please wait...' : 'CREATE ACCOUNT'}
                    </button>
                </div>
            </form>
        </div>
        <div className='flex items-center gap-2 mx-auto p-3 text-center'>
            <p className='text-sm'>already have an account?</p>
            <Link to={`/login`}>
            <p className='hover:underline font-bold hover:font-extrabold'>login</p>
            </Link>
        </div>
        </div>
    </div>
    
  )
}