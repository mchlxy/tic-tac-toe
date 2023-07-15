import React from 'react'

const Box = ({value, onClick}) => {
    const style = value === "X" ? "bg-white text-red-400 rounded-md shadow-lg w-24 h-24 text-4xl text-center font-extrabold font-mono hover:shadow-xl" : "bg-white text-blue-400 rounded-md shadow-lg w-24 h-24 text-4xl text-center font-extrabold font-mono hover:shadow-xl";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    );
}

export default Box