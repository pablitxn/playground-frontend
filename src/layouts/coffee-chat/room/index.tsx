// React
import { FC } from "react";
// Components
import TextContainer from "components/coffee-chat/text-container";
import ChatBox from "components/coffee-chat/chat-box";
// Styles
import "./styles.less";

interface IRoomLayout {
	chatData: any;
	users: any;
}

const RoomLayout: FC<IRoomLayout> = ({ chatData, users }) => {
	return (
		<div className="outerContainer">
			<span>room: X</span>
			<ChatBox chatData={chatData} />
			<TextContainer users={users} />
		</div>
	);
};

export default RoomLayout;
