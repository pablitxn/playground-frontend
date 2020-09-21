// React
import { FC } from "react";
// Styles
import "./styles.less";

interface IInput {
	setMessage: any;
	sendMessage: any;
	message: any;
}

const Input: FC<IInput> = ({ setMessage, sendMessage, message }) => (
	<form className="form">
		<input
			className="input"
			type="text"
			placeholder="Type a message..."
			value={message}
			onChange={({ target: { value } }) => setMessage(value)}
			onKeyPress={(event) =>
				event.key === "Enter" ? sendMessage(event) : null
			}
		/>
		<button className="sendButton" onClick={(e) => sendMessage(e)}>
			Send
		</button>
	</form>
);

export default Input;
