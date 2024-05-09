import React from 'react'
import { useAuth } from '../../Content/Authprovider';


function Logout() {
    const [authUser,setauthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("users");
            alert("Logout successfully")
            window.location.reload();
        } catch (error) {
            alert("Logout error"+error);
        }
    }
  return (
    <div className='navbar-end'>
        <button onClick={handleLogout}
        className='px-3 py-1 mx-9 text-white rounded-md cursor-pointer bg-red-600 hover:text-black'>Logout</button>
    </div>
  )
}

export default Logout