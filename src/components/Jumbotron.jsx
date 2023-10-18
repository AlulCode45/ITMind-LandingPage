import React from 'react'
import BackgroundJumbotron from '../assets/jumbotron-bg.png'

function Jumbotron({ children, className }) {
    return (
        <div className={`rounded-lg w-full h-[calc(100vh-140px)] p-10 ${className}`} style={{
            background: `url('${BackgroundJumbotron}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>
            {children}
        </div>
    )
}

export default Jumbotron