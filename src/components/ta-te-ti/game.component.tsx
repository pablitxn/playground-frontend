// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// Utils
import { calculateWinner } from "utils/ta-te-ti";
// Game Components
import Board from "./board.component";
// Styles
import "./game.styles.less";

const Game: FC = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);

	const winner = calculateWinner(history[stepNumber]);
	const xO = xIsNext ? "X" : "O";

	const handleClick = (i: any) => {
		const historyPoint = history.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const squares = [...current];
		// return if won or occupied
		if (winner || squares[i]) return;

		// select square
		squares[i] = xO;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXIsNext(!xIsNext);
	};

	const jumpTo = (step: number) => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	// const renderMoves = () => {
	// 	const board = history.map((_step, move) => {
	// 		const destination = move ? `Go to move #${move}` : "Go to start";
	// 		return (
	// 			<li key={move}>
	// 				<button onClick={() => jumpTo(move)}>{destination}</button>
	// 			</li>
	// 		);
	// 	});
	// 	console.log(board);
	// 	return board;
	// };

	const renderMoves = () =>
		history.map((_step, move) => {
			const destination = move ? `Go to move #${move}` : "Go to Start";
			return (
				<li key={move}>
					<button onClick={() => jumpTo(move)}>{destination}</button>
				</li>
			);
		});

	return (
		<>
			<h1>React Tic Tac Toe - With Hooks</h1>
			<Board squares={history[stepNumber]} onClick={handleClick} />
			<div className="info-wrapper">
				<div>
					<h3>History</h3>
					{renderMoves()}
				</div>
				<h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
			</div>
		</>
	);
};

export default Game;
