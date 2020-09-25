// React
import { FC } from "react";
// Types
import { IMessage as $IMessage } from "interfaces/coffee-chat";
// Utils
import ReactEmoji from "react-emoji";
// Styles
import "./styles.less";

interface IMessage {
	message: $IMessage;
	myName: string;
}

const Message: FC<IMessage> = ({ message: { text, name }, myName }) => {
	let isSentByCurrentUser = false;

	const trimmedMyName = myName.trim().toLowerCase();

	if (name === trimmedMyName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className="message message--end">
			<p className="message__sent-text message__sent-text--end ">
				{trimmedMyName}
			</p>
			<div className="message__box message__box--blue">
				<p className="message__text message__text--white ">
					{ReactEmoji.emojify(text)}
				</p>
			</div>
		</div>
	) : (
		<div className="message message--start">
			<div className="message__box message__box--light">
				<p className="message__text message__text--dark">
					{ReactEmoji.emojify(text)}
				</p>
			</div>
			<p className="message__sent-text message__sent-text--start ">{name}</p>
		</div>
	);
};

export default Message;
