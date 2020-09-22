// React
import { FC, useState } from "react";
// Styles
import "./styles.less";

interface IJoin {
	handleSignIn: (data: any) => void;
}

const Join: FC<IJoin> = ({ handleSignIn }) => {
	const [state, setState] = useState({
		name: "",
		room: ""
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		setState({
			...state,
			[name]: value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleSignIn(state);
	};

	const { name, room } = state;

	return (
		<div className="join">
			<form noValidate autoComplete="off" className="join__form">
				<h1 className="join__header">Join</h1>
				<div>
					<input
						name="name"
						placeholder="Name"
						className="join__name"
						type="text"
						value={name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						name="room"
						placeholder="Room"
						className="join__room"
						type="text"
						value={room}
						onChange={handleChange}
					/>
				</div>
				<button className={"join__submit"} type="submit" onClick={handleSubmit}>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default Join;
