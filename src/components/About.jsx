import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {FaHome} from "react-icons/fa";

function About() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <div className='items-center text-center'>
                <h1 className='text-4xl mb-6 font-bold'>Github Finder</h1>
                <p className='mb-4 ml-4 text-2xl font-light mx-auto '>
                    A React app to search GitHub profiles and see profile details.
                </p>
                <p className='text-lg ml-4 text-gray-400 mx-auto'>
                    Version
                    <span className='text-white'>1.0.0</span>
                </p>
                <p className='text-lg ml-4 text-gray-400 mx-auto'>
                    Layout By:{' '}
                    <a className='text-white mx-auto' href='https://github.com/alirezahamami/'>
                        Alireza Hamami
                    </a>
                </p>
                <Link className='btn btn-ghost btn-md mt-8' to='/'>
                    <FaHome className='mr-2'/>
                    Back To Home
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default About