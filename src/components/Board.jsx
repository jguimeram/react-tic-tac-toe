import Square from "./Square";
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        const nextSquares = squares.slice()
        nextSquares[i] = 'X'
        setSquares(nextSquares)
    }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={()=>handleClick(i)}/>
        <Square value={squares[1]} onClick={()=>handleClick(i)}/>
        <Square value={squares[2]} onClick={()=>handleClick(i)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={()=>handleClick(i)}/>
        <Square value={squares[4]} onClick={()=>handleClick(i)}/>
        <Square value={squares[5]} onClick={()=>handleClick(i)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={()=>handleClick(i)}/>
        <Square value={squares[7]} onClick={()=>handleClick(i)}/>
        <Square value={squares[8]} onClick={()=>handleClick(i)}/>
      </div>
    </>
  );
}

export default Board;
