import React from 'react'
import Square from './Square'
import useGameStore from '../store/store'
function Board() {
    const squares = useGameStore((state) => state.squares)
    console.log(squares, 'fdf')
    const setSquare = useGameStore(state => state.setSquare)

    const xIsNext = useGameStore((state) => state.xIsNext)
    const setXIsNext = useGameStore((state) => state.setXIsNext)
    const winner = calculateWinner(squares)
    const turns = calculateTurns(squares)
    const player = xIsNext ? "X" : "O"
    const status = calculateStatus(winner, turns, player)
    const handleClick = (i) => {
        if (squares[i] || winner) return;

        const nextSquare = squares.slice();

        nextSquare[i] = player;

        setSquare(nextSquare);

        setXIsNext(!xIsNext);
    }
    return (
        <>
            {status}
            <div className='grid grid-cols-3 grid-rows-3 border border-#999 w-full gap-20 mx-15 content-center'>

                {squares.map((sq, index) => (
                    <Square
                        key={index}
                        value={sq}
                        onSquareClick={() => handleClick(index)}
                    />
                ))}

            </div>
        </>
    )
}

export default Board


const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

const calculateTurns = (squares) => {
    return squares.filter(square => !square).length
}

const calculateStatus = (winner, turns, player) => {
    if (!winner && !turns) return 'Draw'
    if (winner) return `Winner ${winner}`
    return `Next player: ${player}`
}