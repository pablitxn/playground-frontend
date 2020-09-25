// React
import { FC } from "react";
// Components
import ChatBox from "./chat-box";
// import Panel from "./panel";
// Styles
import "./styles.less";

interface IChat {
	stateChat: any;
	chatId: string;
	sendMessage: (payload: any) => void;
	room: string;
}

const Chat: FC<IChat> = ({ stateChat, sendMessage, room }) => {
	return (
		<div className="room">
			<ChatBox room={room} stateChat={stateChat} sendMessage={sendMessage} />
			{/* <Panel users={users} /> */}
		</div>
	);
};

export default Chat;
