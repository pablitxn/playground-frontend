// Types
import { FC, EventHandler } from 'react'

interface ISquare {
  value: any
  onClick: (i: number) => void
  index: number
}

type HandleClick = EventHandler<any>

const Square: FC<ISquare> = ({ onClick, value, index }) => {
  const style = value ? `squares ${value}` : `squares`

  const handleClick: HandleClick = () => {
    onClick(index)
  }

  return (
    <button className={style} onClick={handleClick}>
      {value}
    </button>
  )
}

export default Square
