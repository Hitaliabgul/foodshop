import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Purchase() {
  const [food,setFood]=useState([])
  useEffect(()=>{
    const getFood=async()=>{
      try {
     let res= await axios.get("http://localhost:4001/food")
      console.log(res.data)
   
     setFood(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood();
  },[])
   
  
  return (
    <div>
      <Navbar />
      <div className='max-w-screen-sm container mx-auto md:px-20 px-4 mt-12 text-center justify-center '>
        <h1 className='font-bold text-xl pb-2'>Handcrafted Meals, Just a Click Away!!</h1>
        <p >Welcome to <span className='text-green-700 bold'>Foodie</span>, where we bring the finest ingredients directly from the farm to your table. Our mission
          is to make gourmet dining an everyday pleasure, with minimal effort but maximum flavor.</p><br />
      <Link to="/" className='bg-green-700 px-4 py-1 text-white my-6 rounded-md shadow-md hover:text-black '>Back</Link>

      </div>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-5'>
        {food.map((item) => (
          <Card item={item} key={item.id} />
        ))}

      </div>
    
    </div>
  )
}

export default Purchase