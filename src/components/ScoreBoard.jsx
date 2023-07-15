import React from 'react';

export const ScoreBoard = ({ score, xPlaying }) => {
    const { xScore, oScore } = score;

    return (
        <div className="bg-white shadow-lg w-full h-24 mb-5 mt-14 rounded-md font-bold">
            <div
                className={`${
                xPlaying ? 'bg-red-200 text-red-400' : 'bg-white text-red-400'
                } w-[50%] pt-5 h-full float-left text-center`}
            >
                <span className="text-2xl">{xScore}</span>
                <p>PLAYER A</p>
            </div>

            <div
                className={`${
                xPlaying ? 'bg-white text-blue-400' : 'bg-blue-200 text-blue-400'
                } w-[50%] pt-5 h-full float-left text-center`}
            >
                <span className="text-2xl">{oScore}</span>
                <p>PLAYER B</p>
            </div>
        </div>
    );
};

export default ScoreBoard;
