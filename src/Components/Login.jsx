import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"
import axios from 'axios'
function Login() {

  
  const onSubmit = async(data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }

    try {
      
      await axios.post("http://localhost:4001/user/login", userInfo)
        .then((res) => {
          console.log(res.data)
          if (res.data) {
            alert("login successfull")
           document.getElementById("my_modal_3").close();
           window.location.reload();
   
          }
          localStorage.setItem("users", JSON.stringify(res.data));

        })
    }
    catch (err) {
      console.error(err);
      if (err.res) {
        // More specific error message from server
        alert("login failed: " + err.res.data);
      } else {
        alert("login failed: Network or server error.");
      }
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    return (
        <div>
             <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link  onClick={() => { document.getElementById("my_modal_3").close() }} to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input type="email" placeholder='Enter your email' {...register("email", { required: true })} className='py-1 w-80 px-3 rounded-md outline-none'></input>
              <br />
              {errors.email &&  <span className="text-sm text-red-500 ">This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <input type="password" placeholder='Enter your password' {...register("password", { required: true })} className='py-1 w-80 px-3 rounded-md outline-none'></input>
              <br />
              {errors.password &&  <span className="text-sm text-red-500 ">This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button className='bg-green-700 px-3 py-1 rounded-md hover:text-black text-white cursor-pointer duration-300'>Login</button>
              <p>Not registered? <Link to="/Signup" className='cursor-ponter underline text-blue-500'>Sign Up</Link></p>
            </div>
            </form>
        </div>

      </dialog>
    </div>
        </div>
    )
}

export default Login