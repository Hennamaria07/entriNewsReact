import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const res = await axios.post("http://localhost:4000/api/v1/user/signup", data);
        
        if (res.data.success) {
            toast.success(res.data.message);
            console.log(res.data.user)
            setTimeout(() => {
                navigate('/login')
            }, 700)
        }
        if (!res.data.success) {
            toast.success(res.data.error);
            // console.log(res.data.user)
        }
    }
    return (


        <section className='py-20'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className="max-w-md mx-auto py-6 bg-slate-100 px-5 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center text-2xl py-4'>Sign up Form</h1>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Daisy"
                        {...register('name', {
                            pattern: {
                                value: /^[a-zA-Z]{5,}(\s[a-zA-Z]+)*$/,
                                message: "Name should contain minimum 5 characters"
                            },
                            required: "Name is required",
                            validate: (fieldValue) => fieldValue !== ""
                        })}
                    />
                    <p className='text-red-500'>{errors.name?.message}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        {...register('email',
                            {
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format"
                                },
                                required: "Email is required",
                                validate: (fieldValue) => fieldValue !== ""
                            }
                        )}
                    />
                    <p className='text-red-500'>{errors.email?.message}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register('password',
                            {
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character"
                                },
                                required: "Password is required",
                                validate: (fieldValue) => fieldValue !== ""
                            })}
                    />
                    <p className='text-red-500'>{errors.password?.message}</p>
                    <div className='flex justify-between py-2 gap-5'>
                        <p>Already Have an Account?<Link className='ps-2 text-primary' to={'/login'}>Login</Link></p>
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </section>
    )
}

export default Signup