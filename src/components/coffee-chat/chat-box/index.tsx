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
		me: string;
		sendMessage: (message: string) => void;
	};
	room: string;
}

const ChatBox: FC<IChatBox> = ({ handleChat, room }) => {

	const { messages, sendMessage, me } = handleChat;

	return (
		<div className="chat-box">
			{true ? (
				<>
					<InfoBar room={room} />
					<Messages messages={messages} me={me} />
					<Input sendMessage={sendMessage} />
				</>
			) : (
				<span>loading...</span>
			)}
		</div>
	);
};

export default ChatBox;
