import React from 'react'
import Login from './Login'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

function Signup() {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate();
    const {
        register,   //react hook form
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        try {
            await axios.post("http://localhost:4001/user/signup", userInfo)
                .then((res) => {
                    console.log(res.data)
                    if (res.data) {
                        alert("signup successfull");
                        navigate(from, { replace: true })
                    }

                    localStorage.setItem("Users", JSON.stringify(res.data.message));
                   
                })
        }
        catch (err) {
            //console.log(err);
            alert("User already exists!!")
            if (err.res) {
                // More specific error message from server
                alert("Signup failed: " + res.data.message);
            }
        }
    }

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Sign Up</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span><br />
                                <input type="text" placeholder='Enter your name' {...register("name", { required: true })} className='py-1 w-80 px-3 rounded-md outline-none'></input>
                                <br />
                                {errors.name && <span className="text-sm text-red-500 ">This field is required</span>}


                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span><br />
                                <input type="email" placeholder='Enter your email'  {...register("email", { required: true })} className='py-1 w-80 px-3 rounded-md outline-none'></input>
                                <br />
                                {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}

                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span><br />
                                <input type="password" placeholder='Enter your password'  {...register("password", { required: true })} className='py-1 w-80 px-3 rounded-md outline-none'></input>
                                <br />
                                {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}


                            </div>

                            <div className='flex justify-around mt-4'>
                                <button className='bg-green-700 px-3 py-1 rounded-md hover:text-black cursor-pointer text-white duration:300'>Signup</button>
                                <p>Already have an account?
                                    <Link to='/' onClick={() => { document.getElementById("my_modal_3").showModal() }} className='cursor-ponter underline text-blue-500'>Login</Link></p>

                            </div>
                        </form>
                        <Login />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup