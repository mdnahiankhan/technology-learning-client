import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')

    const { googleLogin, SigninUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const googleprovider = new GoogleAuthProvider()

    const handleGooglsignin = () => {
        googleLogin(googleprovider)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleSignin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        SigninUser(email, password)
            .then(result => {
                const user = result.user
                event.target.reset();
                console.log(user);
                setError('')
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">Dont have account?
                    <Link to='/register' href="#" rel="noopener noreferrer" className="focus:underline hover:underline dark:text-violet-400">Sign up here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGooglsignin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" type='button' className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        </svg>
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={handleSignin} className="space-y-12">
                    <div>
                        <label htmlFor="">Enter Your email</label>
                        <input type="text" name='email' placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder="enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 '>Sign In</button>
                    <h1 className='text-xl'>{error}</h1>
                </form>
            </div>
        </div>
    );
};

export default Login;