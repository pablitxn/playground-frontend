// React
import { FC } from "react";
// Components
import Join from "components/coffee-chat/join";
import Room from "components/coffee-chat/room";
// Hooks
import {
	useJoinSocket,
	useChat,
	useSession
} from "hooks/coffee-chat";
// Websockets
import io from "socket.io-client";
// Styles
import "./styles.less";

const WEBSOCKET_URL = "http://localhost:4420/";

const CoffeChat: FC = () => {
	// Handle view //
	const { userA, userB, test, handleSignIn, handleTest } = useSession();
	// Websockets connection //
	const socketUserA = io(WEBSOCKET_URL);
	const socketUserB = io(WEBSOCKET_URL);
	useJoinSocket(userA, socketUserA);
	useJoinSocket(userB, socketUserB);
	// Connecting chat-room //
	const chatUserA = useChat(socketUserA);
	const chatUserB = useChat(socketUserB);

	const sendMessage = (payload) => {
		const { chatId, message } = payload;
		if (message !== "") {
			chatId === "user-a" && socketUserA.emit("sendMessage", message);
			chatId === "user-b" && socketUserB.emit("sendMessage", message);
		}
	};

	return (
		<>
			<button onClick={handleTest} className="coffee-chat__action-test">
				test
			</button>
			<div className="coffee-chat">
				<div className="coffee-chat__user-a">
					{!userA.active ? (
						<Join handleSignIn={handleSignIn} chatId="user-a" />
					) : (
						<Room handleRoom={roomUserA} chatId="user-a" />
					)}
				</div>
				{test ? (
					<div className="coffee-chat__user-b">
						{!userB.active ? (
							<Join handleSignIn={handleSignIn} chatId="user-b" />
						) : (
							<Room handleRoom={roomUserB} chatId="user-b" />
						)}
					</div>
				) : null}
			</div>
		</>
	);
};

export default CoffeChat;
