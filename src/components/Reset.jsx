import React from 'react'

const Reset = ({resetBoard}) => {
    return (
        <div className='flex justify-center items-center pt-5 pb-5'>
            <button onClick={resetBoard} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <span>RESET</span>
            </button>
        </div>

    )
}

export default Reset