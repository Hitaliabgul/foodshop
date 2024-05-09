import React from 'react'
import Navbar from './Navbar'

function Contact() {
    return (
        <>
       <Navbar />
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea placeholder="enter your message here..." id="message" name="message" rows="4" required className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-700 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}


export default Contact