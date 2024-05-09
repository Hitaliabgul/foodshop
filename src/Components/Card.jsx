import React, { useState } from 'react'

function Card({ item }) {
    //console.log(item)
    const handleAddtocart = () => {
        const d = [item.name, item.description, qty, size, totalPrice]
        console.log(d)

    }
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("half");
    
    const sizePrices = {
        "half": 100,  // Example price for 'half' size
        "full": 150   // Example price for 'full' size
    };
    const totalPrice = sizePrices[size] * qty;
    return (
        <>

            <div className='mt-4 my-3 p-8 '>

                <div className="card w-92 bg-base-100 shadow-xl px-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure><img src={item.img} alt="Shoes" /></figure>
                    <div className="card-body">

                        <h2 className="card-title font-serif text-sm">
                            {item.name}

                        </h2>
                        <p className='font-sans text-sm'>{item.description}</p>
                        <div className="card-actions ">
                            <select className="m-1 h-100 bg-success rounded" onChange={(e) => setQty((e.target.value))}>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <select className="m-1 h-100 bg-success rounded" onChange={(e) => setSize(e.target.value)}>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>

                        </div>

                        Total: Rs.{totalPrice}/-
                        <button className="justify-center bg-success rounded-md mt-3 py-1 " onClick={handleAddtocart}>Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card