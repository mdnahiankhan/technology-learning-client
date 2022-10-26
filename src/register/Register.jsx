import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const imgUrl = event.target.imgUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, imgUrl, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
                event.target.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-400">If you don't have an account Sign up to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div>
                        <label htmlFor="">Enter Your Name</label>
                        <input type="text" name='name' placeholder="Type here" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Img Url</label>
                        <input type="text" name='imgUrl' placeholder="Enter Your ImgUrl" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Enter Your email</label>
                        <input type="text" name='email' placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder="enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 '>Sign Up</button>
                    <h1 className='text-xl'>{error}</h1>
                </form>
                <p className="text-sm text-center dark:text-gray-400">Already have an account?
                    <Link to='/login' href="#" rel="noopener noreferrer" className="focus:underline hover:underline dark:text-violet-400">Sign in here</Link></p>
            </div>
        </div>
    );
};

export default Register;