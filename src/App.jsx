import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import Reset from "./components/Reset";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({xScore: 0, oScore: 0});
  const [gameOver, setGameOver] = useState(false);
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    MySwal.fire({
      title: 'Welcome!',
      html: 'This game is created with ReactJS, Vite and Tailwind by <a href="https://itsmike.netlify.app" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-semibold hover:underline">Michael</a>',
      icon: 'info',
      confirmButtonText: "Let's play!"
    });
  }, []);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying == true ? "X" : "O";
      } else {
        return value;
      }
    });

    const win = checkWinner(updatedBoard);
    if(win) {
      if(win === "O"){
        let {oScore} = score;
        oScore +=1;
        setScore({...score, oScore})
      }else{
          let {xScore} = score;
          xScore +=1;
          setScore({...score, xScore})
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
  
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        
        const winner = board[a];

        MySwal.fire({
          title: 'Congratulations!',
          text: `Player ${winner} wins!`,
          icon: 'info',
          confirmButtonText: 'Cool'
        }).then(() => {
          resetBoard();
        });
  
        return winner;
      }
    }
  };
  
  

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
      <div className="w-[85%] md:w-[40%] lg:w-[20%]  m-auto">
        <ScoreBoard score={score} xPlaying={xPlaying}/>
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <Reset resetBoard={resetBoard} />
      </div>
  );
}

export default App;
