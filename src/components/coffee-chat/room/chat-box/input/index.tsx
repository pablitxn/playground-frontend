// React
import { FC, useState } from "react";
// Styles
import "./styles.less";

interface IInput {
	sendMessage: (message: string) => void;
}

const Input: FC<IInput> = ({ sendMessage }) => {
	const [message, setMessage] = useState("");

	const handleChange = ({ target: { value } }) => setMessage(value);

	const handleSubmit = (event) => {
		event.preventDefault();
		sendMessage(message);
	};

	return (
		<form noValidate autoComplete="off" className="message">
			<input
				className="message__input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={handleChange}
			/>
			<button
				className="message__send-button"
				onClick={handleSubmit}
				type="submit"
			>
				Send
			</button>
		</form>
	);
};

export default Input;
