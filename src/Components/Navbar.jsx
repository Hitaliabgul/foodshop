import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { useAuth } from '../../Content/Authprovider'

function Navbar() {
    const [authUser, setauthUser] = useAuth();
    const items = (
        <>
            <li className='hover:text-black text-xl'><a href='/'> Home   </a></li>
            <li className='hover:text-black text-xl'><a href='purchase'>Purchase</a></li>
            <li className='hover:text-black text-xl'><a href='contact'>Contact </a></li>
            <button className="btn text-xl hover:text-black btn-success bg-green-700 text-white border-none " onClick={()=>document.getElementById('my_modal_3').showModal()}>My cart</button>

        </>
    )
    
    return (
        <div>

            <div className="navbar bg-green-700">
                <div className="navbar-start">      
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                   
                    <a className="btn btn-ghost text-2xl md:text-2xl font-sans text-white">Foodie</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1 text-black  md:text-white text:xm md:text-xm">{items}</ul>
                </div>
                {
                    authUser? <Logout />:(
                    <div className="navbar-end">
                    <button className=" px-3 py-1 rounded-md bg-red-600 btn-success mx-9 text-white " onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                    <Login />
                </div>)

                    
                }
              
            </div>
        </div>
    )
}

export default Navbar