// React
import { FC, useState } from "react";
// Types
import { ISendMessage } from "interfaces/coffee-chat";
// Styles
import "./styles.less";

interface IInput {
	sendMessage: ISendMessage;
	chatId: string;
}

const Input: FC<IInput> = ({ sendMessage, chatId }) => {
	const [message, setMessage] = useState("");
	const handleChange = ({ target: { value } }) => setMessage(value);

	const handleSubmit = (event) => {
		event.preventDefault();
		const text = message;
		sendMessage({ text, chatId });
		setMessage("");
	};

	return (
		<form noValidate autoComplete="off" className="message-form">
			<input
				className="message-form__input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={handleChange}
			/>
			<button
				className="message-form__send-button"
				onClick={handleSubmit}
				type="submit"
			>
				Send
			</button>
		</form>
	);
};

export default Input;
