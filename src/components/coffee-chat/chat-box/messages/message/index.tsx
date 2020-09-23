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

const Message: FC<IMessage> = ({ message: { text, user }, name }) => {
	let isSentByCurrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	useEffect(() => {
		console.log(text, user, name);
	}, [text, user, name]);
	return isSentByCurrentUser ? (
		<div className="message message--end">
			<p className="message__sent-text message__sent-text--end ">
				{trimmedName}
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
