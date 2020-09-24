// React
import { FC } from "react";
// Components
import ChatBox from "./chat-box";
// import Panel from "./panel";
// Styles
import "./styles.less"

interface IRoom {
	handleRoom: any;
	chatId: string;
}

const Room: FC<IRoom> = ({ handleRoom }) => {
	// const { users } = handleRoom;
	return (
		<div className="room">
			<ChatBox handleChat={handleRoom} />
			{/* <Panel users={users} /> */}
		</div>
	);
};

export default Room;
