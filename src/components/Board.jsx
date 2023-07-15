import React from 'react'
import Box from './Box'

const Board = ({board, onClick}) => {
    return (
        <div className="grid grid-cols-3 gap-4 place-items-center">
            {board.map((value, idx) => {
                return <Box value={value} onClick={() => value === null && onClick(idx)} />
            })}
        </div>
    )
}

export default Board