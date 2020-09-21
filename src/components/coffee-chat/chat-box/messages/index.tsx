// React
import { FC } from "react";
// Components
import Message from "./message";
// Utils
import ScrollToBottom from "react-scroll-to-bottom";

import "./styles.less";

interface IMessages {
	messages: any;
	name: any;
}

const Messages: FC<IMessages> = ({ messages, name }) => (
	<ScrollToBottom className="messages">
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Messages;
