// React
import { FC } from "react";
// Components
import Messages from "components/coffee-chat/chat-box/messages";
import InfoBar from "components/coffee-chat/chat-box/info-bar";
import Input from "components/coffee-chat/chat-box/input";
// Styles
import "./styles.less";

interface IChatBox {
	handleChat: {
		messages: any;
		name: string;
		sendMessage: (message: string) => void;
		users: any;
	};
	room: string;
}

const ChatBox: FC<IChatBox> = ({ handleChat, room }) => {
	return (
		<div className="chat-box">
			{true ? (
				<>
					<InfoBar room={room} />
					<Messages messages={handleChat.messages} name={handleChat.name} />
					<Input sendMessage={handleChat.sendMessage} />
				</>
			) : (
				<span>loading...</span>
			)}
		</div>
	);
};

export default ChatBox;
