// React
import { FC } from "react";
// Components
import Messages from "components/coffee-chat/chat-box/messages";
import InfoBar from "components/coffee-chat/chat-box/info-bar";
import Input from "components/coffee-chat/chat-box/input";

interface IChatBox {
	chatData: {
		room: any;
		messages: any;
		name: any;
		message: any;
		setMessage: any;
		sendMessage: any;
		users: any;
	};
}

const ChatBox: FC<IChatBox> = ({ chatData }) => {
	return (
		<div className="container">
			{chatData ? (
				<>
					<InfoBar room={chatData.room} />
					<Messages messages={chatData.messages} name={chatData.name} />
					<Input
						message={chatData.message}
						setMessage={chatData.setMessage}
						sendMessage={chatData.sendMessage}
					/>
				</>
			) : (
				<span>loading...</span>
			)}
		</div>
	);
};

export default ChatBox;
