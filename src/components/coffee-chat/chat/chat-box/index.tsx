// React
import { FC } from "react";
// Types
import {
	IMessage,
	ISendMessage,
	IHandleQuit,
	ChatId
} from "interfaces/coffee-chat";
// Components
import Messages from "components/coffee-chat/chat/chat-box/messages";
import InfoBar from "components/coffee-chat/chat/chat-box/info-bar";
import Input from "components/coffee-chat/chat/chat-box/input";
// Styles
import "./styles.less";

interface IChatBox {
	messages: IMessage[];
	room: string;
	sendMessage: ISendMessage;
	chatId: ChatId;
	myName: string;
	handleQuit: IHandleQuit;
}

const ChatBox: FC<IChatBox> = ({
	messages,
	sendMessage,
	room,
	chatId,
	myName,
	handleQuit
}) => {
	return (
		<div className="chat-box">
			<InfoBar
				room={room}
				handleQuit={handleQuit}
				chatId={chatId}
				myName={myName}
			/>
			<Messages messages={messages} myName={myName} />
			<Input sendMessage={sendMessage} chatId={chatId} />
		</div>
	);
};

export default ChatBox;
