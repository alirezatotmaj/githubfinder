import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function Navbar({title}) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            <div className='container mx-auto'>
                <div className='flex-none px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-3xl'/>
                    <Link to='/github/' className='text-lg font-bold align-middle'>{title}</Link>
                </div>
                <div className='flex-1 px-2 mx-2'>
                    <div className='flex  justify-end'>
                        <Link to='/github/' className='btn btn-ghost btn-sm rounded-btn'>HOME</Link>
                        <Link to='/github/about' className='btn btn-ghost btn-sm rounded-btn'>ABOUT</Link>
                    </div>
                </div>
            </div>
        </nav>
    
    )
}


Navbar.propTypes = {
    title:PropTypes.string
}

Navbar.defaultProps = {
    title:'Github Finder' }

export default Navbar