import React, { useContext, useState } from 'react';
import fbLogo from '../../../../All-iamges/Images/icons/fb.png';
import googleLogo from '../../../../All-iamges/Images/icons/google.png'
import { Link, unstable_HistoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import { toast } from 'react-toastify';

const Login = () => {
    const {signInUser, loading, setLoading, googleSignInUser, facebookSignInUser, facebookAuthProvider} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(true)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        const regex = /^(?=.*[A-Z]).+$/;

        setError('')

        if(!regex.test(password)){
            setError("Password should be at least one capital later")
            return;
        } else if (password.length < 6) {
            setError("Password should be 6 character longer")
            return;
        } else {
            signInUser(email, password)
            .then(result =>{
                const user = result.user;
                toast.success('Login successful')
                setLoading(false)
                navigate(from, {replace : true});
            })
            .catch(error =>{
                const errorMessage = error.message;
                if(errorMessage === 'Firebase: Error (auth/wrong-password).'){
                    setError("Wrong password")
                }
            })
        }
    }
    const googleSignIn = () =>{
        googleSignInUser()
        .then(result =>{
            const user = result.user
            setLoading(false)
            navigate(from, {replace : true});
            toast.success('Login successful')
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const facebookSignIn = () =>{
        facebookSignInUser()
        .then(result =>{
            const user = result.user
            toast.success('Login successful')
            const credential = facebookAuthProvider(result)
            const accessToken = credential.accessToken;
        
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (

       <>
       {
        loading && <Loader/>
       }
        <div className='mx-auto my-5 p-10 w-5/12 '>
            <form onSubmit={handleSubmit} className='p-10 bg-white rounded-md border-2'>
            <p className='text-xl font-bold text-black mb-7'>Login</p>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Username or Email</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="email" name="email" required placeholder='Username or Email' />
            </div>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Password</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="password" required placeholder='password' />
            </div>
            <div className='flex flex-row justify-between items-center my-5'>
                <div className='flex items-center'>
                    <input onClick={()=> setRemember(!remember)} type="checkbox" className="h-5 w-5 text-black border border-black rounded-md" />
                    <span className="ml-2 text-black font-semibold">Remember me</span>
                </div>
                <p className='text-btn-color underline cursor-pointer'>Forgot Password</p>
            </div>
            <p className='text-red-700 mt-3'>{error}</p>
            <button disabled={remember} className='bg-btn-color w-full py-3 text-xl rounded-md my-5 font-bold'>Login</button>
            <p className='text-center'>Don't have an account? <Link to='/login/register'><span className='text-btn-color underline'>Create Account</span></Link></p>
            </form>
            <div onClick={facebookSignIn} className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center hover:bg-gray-200 cursor-pointer'>
                <img className='h-8 w-8' src={fbLogo} alt="" />
                <p className='font-semibold mx-auto'>Continue with Facebook</p>
            </div>
            <div onClick={googleSignIn} className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center  hover:bg-gray-200 cursor-pointer'>
                <img className='h-8 w-8' src={googleLogo} alt="" />
                <p className='font-semibold mx-auto'>Continue with Google</p>
            </div>
        </div>
       </>
    );
};

export default Login;
