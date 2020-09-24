// @ts-nochecks
// React
import { FC } from "react";
// Components
import Message from "./message";
// Utils
import ScrollToBottom from "react-scroll-to-bottom";

import "./styles.less";

interface IMessages {
	messages: any;
	me: string;
}

const Messages: FC<IMessages> = ({ messages, me }) => (
	<ScrollToBottom className="messages">
		{messages.map((element, i) => {
			const { message } = element;
			return (
				<div key={i}>
					<Message message={message} me={me} />
				</div>
			);
		})}
	</ScrollToBottom>
);

export default Messages;
