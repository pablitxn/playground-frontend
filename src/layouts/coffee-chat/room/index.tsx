// React
import { FC } from "react";
// Components
import Panel from "components/coffee-chat/panel";
import ChatBox from "components/coffee-chat/chat-box";
// Styles
import "./styles.less";

interface IRoomLayout {
	room: string;
	handleChat: any;
	users: any;
}

const RoomLayout: FC<IRoomLayout> = ({ handleChat, users, room }) => {
	return (
		<div className="room">
			<ChatBox handleChat={handleChat} room={room} />
			<Panel users={users} />
		</div>
	);
};

export default RoomLayout;
