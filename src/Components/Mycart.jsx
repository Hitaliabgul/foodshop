// Mycart.js
import React from 'react';
import { useCart } from '../Context/Createcontext.jsx';

function Mycart() {
    const { cartItems, emptyCart } = useCart();

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                    <h3 className="font-bold text-lg">My Cart</h3>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    Name: {item.name}, Desc: {item.description}, Qty: {item.quantity}, Size: {item.size}, Total Price: Rs.{item.totalPrice}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <button className="btn btn-outline btn-error" onClick={emptyCart}>Empty Cart</button>
                </div>
            </dialog>
            <button onClick={() => document.getElementById('my_modal_3').showModal()}>View Cart</button>
        </div>
    );
}

export default Mycart;
