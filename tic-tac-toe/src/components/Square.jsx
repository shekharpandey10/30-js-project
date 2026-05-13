import React from 'react'

function Square({ value, onSquareClick }) {
    console.log(value, 'fsdfd')
    return (
        <button onClick={onSquareClick} className='border h-5 w-5 border-black bg-red-500'>
            {value}
        </button>
    )
}

export default Square
