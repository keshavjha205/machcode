import React, { useEffect, useState } from 'react'

function Memorygame() {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([])

  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  const [won, setWon] = useState(false)

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size)
  };

  const initialGame = () => {
    const totalCards = gridSize ** 2;
    const pairCount = Math.floor(totalCards / 2)
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffleCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }))

    setCards(shuffleCards)
    setFlipped([])
    setSolved([])
    setWon(false)
  }

  useEffect(() => {
    initialGame();
  }, [gridSize])

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if(cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    }else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  }

  const handleClick = (id) => {
    if(disabled || won) return;

    if(flipped.length === 0){
      setFlipped([id]);
      return;
    }

    if(flipped.length ===1){
      setDisabled(true);
      if(id !== flipped[0]){
        setFlipped([...flipped, id])
        checkMatch(id)
      } else{
        setFlipped([]);
        setDisabled(false);
      }
    }
  }

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  useEffect(()=>{
    if (solved.length === cards.length && cards.length >0) {
      setWon(true);
    }
  }, [solved, cards])


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-6'>Memory Game</h1>
      {/* Input */}
      <div className='flex items-center gap-2 mb-4'>
        <label htmlFor="gridsize" >Grid Size:</label>
        <input
          type="number"
          id='gridsize'
          min="2" max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
          className='border-1 rounded border-gray-300 px-2 py-1' />
      </div>

      {/* game board */}
      <div className={`grid gap-2 mb-4`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr)`,
          width: `min(100%, ${gridSize * 5}rem)`,
        }}>
        {cards.map((card) => {
          return (
            <div key={card.id} 
            onClick={()=> handleClick(card.id)}
            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 
            ${isFlipped(card.id) ? isSolved(card.id) ? " bg-green-700 text-white" :
            " bg-blue-700 text-white" :  "bg-gray-300 text-gray-400"}`}>
              {isFlipped(card.id) ? card.number : "?"}
            </div>
          )
        })}
      </div>

      {/* Result */}

      {won && (<div className='mt-4 text-4xl font-bold text-green-500 animate-bounce'>You Won!</div>)
}
      {/* Reset/play again */}

          <button onClick={initialGame}
          className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          >{won ? "Play Again" : "Reset"}</button>
    </div>
  )
}

export default Memorygame