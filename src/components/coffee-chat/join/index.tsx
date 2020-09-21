// React
import { FC, useState } from "react";
// Styles
import "./styles.less";

interface IJoin {
	handleSignIn: () => void;
}

const Join: FC<IJoin> = ({ handleSignIn }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input
						placeholder="Name"
						className="joinInput"
						type="text"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Room"
						className="joinInput mt-20"
						type="text"
						onChange={(event) => setRoom(event.target.value)}
					/>
				</div>
				<button className={"button mt-20"} type="submit">
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Join;
