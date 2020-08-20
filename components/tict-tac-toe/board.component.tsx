// Types
import { FC } from 'react'
// Custom Components
import Square from './square.component'

interface IBoard {
  squares: any
  onClick: (i: number) => void
}

const Board: FC<IBoard> = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square: any, i: number) => (
        <Square key={i} value={square} onClick={onClick} index={i} />
      ))}
    </div>
  )
}

export default Board
