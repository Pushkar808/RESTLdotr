import React, { useState } from 'react'

export const UserForm = () => {
    const [formData, setFormData] = useState({})
    const submitData = (e) => {
        e.preventDefault();
        fetch('http://localhost:3006/api/v1/users/setUserdata', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Add this line
            },
            body: JSON?.stringify(formData),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFormData({})
            });
    }
    return (
        <div className='flex md:flex-row flex-col justify-between absolute top-[35%] left-[20%] w-[900px]'>
            <div>
                <div className='font-bold text-3xl  text-white'>
                    User Submission Form
                </div>
                <div className='py-2 text-xl text-[#cf80df]'>
                    <ul className="list-image-[url(check.svg))]">
                        <li className='py-1'>Submits data to MongoDb</li>
                        <li className='py-1'>Users data reflected immediatly</li>
                        <li className='py-1'>Uses React router for routing</li>
                    </ul>
                </div>
            </div>
            <div>
                <form className='w-[400px]' onSubmit={submitData} method='POST'>
                    <div class="mb-1">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 text-white">Your name</label>
                        <input type="text" id="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" required />
                    </div>
                    <div class="mb-1">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">Your email</label>
                        <input type="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-2">
                        <label for="age" class="block mb-2 text-sm font-medium text-gray-900 text-white">Your Age</label>
                        <input type="number" id="age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="26" required />
                    </div>
                    <div className=''>
                        <button type="submit" id="age" class="bg-[#cf80df] border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="26" required>Save User</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
