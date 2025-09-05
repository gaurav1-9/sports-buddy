import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-18 lg:h-24 w-full bg-blackOlive px-6 lg:px-[100px] flex justify-between items-center'>
            <div className="flex h-full">
                <img
                    src="/Logo_image.png"
                    alt="logo"
                    draggable="false"
                />
                <div className="pt-4 lg:pt-2 flex flex-col justify-center items-center font-jaro text-foralWhite lg:text-4xl lg:ml-2">
                    <p className='leading-1 lg:leading-4'>SPORTS</p>
                    <p>BUDDY</p>
                </div>
            </div>

            <Link
                to={'/login'}
                className='bg-flame rounded-full px-4 lg:px-6 pt-2 pb-1 text-foralWhite font-josefinSans text-base lg:text-lg cursor-pointer hover:bg-flame/92 ease-in-out duration-200 hover:scale-[1.03]'
            >
                <p>LOGIN</p>
            </Link>
        </div>
    )
}

export default Navbar