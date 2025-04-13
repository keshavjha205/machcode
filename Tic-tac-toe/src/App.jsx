 import { useState } from "react"
const initialBoard = () => Array(9).fill(null)

function App() {
const [board, setBoard] = useState(initialBoard())

  return (
    <div className="game">
      <div className="status">
        Player turn
        <button>Reset</button>

         <div className="board">
          {board.map((_, index)=>{
            return (
              <button key={index}>
                x
              </button>
            )
          })}
          </div> 
      </div>
    </div>



  )
}

export default App
