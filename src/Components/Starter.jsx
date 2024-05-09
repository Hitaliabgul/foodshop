import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios'
function Starter() {
  const [food,setFood]=useState([])
  useEffect(()=>{
    const getFood=async()=>{
      try {
     let res= await axios.get("http://localhost:4001/food")
     const data=res.data.filter((data)=>data.CategoryName==="Starter")
        console.log(data)

     setFood(data)

 
      } catch (error) {
        console.log(error)
      }
    }
    getFood();
  },[])
   //const filterData=food.filter()
   //const filterBiryani=food.filter((data)=>data.CategoryName==="Biryani/Rice")
   //console.log(filterBiryani)
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
  return (
    <>
    <div>
    <div >
<h1 className='text-2xl container max-w-2xl mx-10 my-3'>Starter</h1><hr />
    <div >
    <Slider {...settings}>
      {food.map((item)=>(
      <Card  item={item} key={item.id}/>
      ))}
      </Slider>
      
    </div>
    </div>
   
    </div>
    </>
  )
}

export default Starter