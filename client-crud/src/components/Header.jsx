import React from 'react'

function Header() {
    return (
        <div className='h-[10%] bg-amber-200 w-full px-10 '>
            <ul className='flex gap-5 font-bold items-center h-full'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header
