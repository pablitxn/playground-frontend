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
	name: string;
}

const Messages: FC<IMessages> = ({ messages, name }) => (
	<ScrollToBottom className="messages">
		{messages?.map((element, i) => {
			const { message } = element;
			return (
				<div key={i}>
					<Message message={message} />
				</div>
			);
		})}
	</ScrollToBottom>
);

export default Messages;
