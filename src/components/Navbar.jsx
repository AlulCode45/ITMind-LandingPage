import React from 'react'

function Navbar() {
    return (
        <nav className='flex items-center justify-between py-3'>
            <div className="it-mind-icon text-white font-bold text-2xl">
                <span>iTMind</span>
            </div>
            <div className="menu-app">
                <ul className='text-white flex items-center space-x-10 font-semibold'>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">Career</a>
                    </li>
                    <li>
                        <button className="bg-primary py-2 px-5 rounded-sm">Join Us</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar