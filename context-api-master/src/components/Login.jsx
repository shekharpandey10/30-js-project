import React, { useContext } from 'react'
import { NewContext } from '../context/AuthProvider'

function Login() {
    const { loggedIn, setLoggedIn } = useContext(NewContext)
    return (
        <div>
            <button className='border p-2 text-white bg-blue-500 rounded-md' onClick={() => setLoggedIn(prev => !prev)}>{loggedIn ? 'LogOut' : 'LogIn'}</button>
        </div>
    )
}

export default Login
