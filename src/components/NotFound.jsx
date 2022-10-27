import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

function NotFound() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <div className='hero'>
                <div className='text-center hero-content'>
                    <div className='max-w-lg'>
                        <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
                        <p className='text-5xl mb-8'>404 - Page Not Found!</p>
                        <Link className='btn btn-ghost btn-lg mt-8' to='/'>
                            <FaHome className='mr-2'/>
                            Back To Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default NotFound