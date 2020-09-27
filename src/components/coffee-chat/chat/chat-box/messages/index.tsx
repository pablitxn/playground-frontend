// React
import { FC } from "react";
// Types
import { IMessage } from "interfaces/coffee-chat";
// Components
import Message from "./message";
// Utils
import ScrollToBottom from "react-scroll-to-bottom";

import "./styles.less";

interface IMessages {
	messages: IMessage[];
	myName: string;
}

const Messages: FC<IMessages> = ({ messages, myName }) => (
	<ScrollToBottom className="messages">
		{messages.map((message, i) => {
			return (
				<div key={i}>
					<Message message={message} myName={myName} />
				</div>
			);
		})}
	</ScrollToBottom>
);

export default Messages;
