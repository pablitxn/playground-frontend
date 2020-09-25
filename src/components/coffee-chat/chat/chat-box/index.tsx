// React
import { FC } from "react";
// Components
import Messages from "components/coffee-chat/chat/chat-box/messages";
import InfoBar from "components/coffee-chat/chat/chat-box/info-bar";
import Input from "components/coffee-chat/chat/chat-box/input";
// Styles
import "./styles.less";

interface IChatBox {
	stateChat: {
		messages: any;
		name: string;
	};
	room: string;
	sendMessage: (message: string) => void;
}

const ChatBox: FC<IChatBox> = ({ stateChat, sendMessage, room }) => {
	const { messages, name } = stateChat;
	return (
		<div className="chat-box">
			<InfoBar room={room} />
			<Messages messages={messages} name={name} />
			<Input sendMessage={sendMessage} />
		</div>
	);
};

export default ChatBox;
