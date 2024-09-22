import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();
    console.log(location?.pathname)
    return (
        <header>
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="https://cdn3.f-cdn.com//files/download/144571748/professional%20logo.jpg?fit=crop" className="mr-3 h-6 sm:h-9 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold text-white">Test LDotr</span>
                    </a>
                    <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className={`block py-2 pr-4 pl-3 ${location?.pathname === "/" ? 'text-white' : 'text-gray-400 hover:text-white'} lg:p-0`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/form" className={`block py-2 pr-4 pl-3 ${location?.pathname === "/form" ? 'text-white' : 'text-gray-400  hover:text-white'} lg:p-0`}>User Form</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
