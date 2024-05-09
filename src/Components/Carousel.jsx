import React from 'react'

function Carousel() {
    return (
        <div>
            <div className="carousel w-full md:h-[500px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.webp" className="w-full" />
   
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.shutterstock.com/image-photo/supreme-pizza-lifted-slice-1-600nw-84904912.jpg" className="w-full" />
    
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek=" className="w-full" />
   
  </div> 
  
  
</div>
        </div>
    )
}

export default Carousel