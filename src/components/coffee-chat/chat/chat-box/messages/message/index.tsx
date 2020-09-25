// React
import { FC, useEffect } from "react";
// Utils
import ReactEmoji from "react-emoji";
// Styles
import "./styles.less";

interface IMessage {
	message: {
		text: string;
		user: string;
	};
	name: string;
}

const Message: FC<IMessage> = ({ message: { text, user }, name = "" }) => {
	let isSentByCurrentUser = false;

	const trimmedMyName = name.trim().toLowerCase();

	if (user === trimmedMyName) {
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
			<p className="message__sent-text message__sent-text--start ">{user}</p>
		</div>
	);
};

export default Message;
