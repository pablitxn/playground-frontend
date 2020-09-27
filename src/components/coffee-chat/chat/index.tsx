// React
import { FC } from "react";
// Types
import {
	IStateChat,
	ISendMessage,
	IHandleQuit,
	ChatId
} from "interfaces/coffee-chat";
// Components
import ChatBox from "./chat-box";
// import Panel from "./panel";
// Styles
import "./styles.less";

interface IChat {
	stateChat: IStateChat;
	chatId: ChatId;
	sendMessage: ISendMessage;
	room: string;
	myName: string;
	handleQuit: IHandleQuit;
}

const Chat: FC<IChat> = ({
	stateChat,
	sendMessage,
	room,
	chatId,
	myName,
	handleQuit
}) => {
	const { messages } = stateChat;
	return (
		<div className="chat">
			<ChatBox
				room={room}
				chatId={chatId}
				messages={messages}
				sendMessage={sendMessage}
				myName={myName}
				handleQuit={handleQuit}
			/>
			{/* <Panel users={users} /> */}
		</div>
	);
};

export default Chat;
