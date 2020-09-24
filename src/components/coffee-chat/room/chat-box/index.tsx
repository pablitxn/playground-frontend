// React
import { FC } from "react";
// Components
import Messages from "components/coffee-chat/room/chat-box/messages";
import InfoBar from "components/coffee-chat/room/chat-box/info-bar";
import Input from "components/coffee-chat/room/chat-box/input";
// Styles
import "./styles.less";

interface IChatBox {
	handleChat: {
		messages: any;
		name: string;
		sendMessage: (message: string) => void;
		room: string;
	};
}

const ChatBox: FC<IChatBox> = ({ handleChat }) => {
	const { messages, sendMessage, name, room } = handleChat;

	return (
		<div className="chat-box">
			<InfoBar room={room} />
			<Messages messages={messages} me={name} />
			<Input sendMessage={sendMessage} />
		</div>
	);
};

export default ChatBox;
