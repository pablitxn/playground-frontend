// React
import { FC } from "react";
// Types
import { ISendMessage } from "interfaces/coffee-chat";
// Components
import Join from "components/coffee-chat/join";
import Chat from "components/coffee-chat/chat";
// Hooks
import { useJoinSocket, useChat, useSession } from "hooks/coffee-chat";
// Websockets
import io from "socket.io-client";
// Styles
import "./styles.less";

const WEBSOCKET_URL = "http://localhost:4420/";

const CoffeChat: FC = () => {
	// Handle view //
	const {
		userA,
		userB,
		test,
		handleSignIn,
		handleTest,
		handleQuit
	} = useSession();
	// Websockets connection //
	const socketUserA = io(WEBSOCKET_URL);
	const socketUserB = io(WEBSOCKET_URL);
	useJoinSocket(userA, socketUserA);
	useJoinSocket(userB, socketUserB);
	// Connecting chat-room //
	const chatUserA = useChat(socketUserA);
	const chatUserB = useChat(socketUserB);

	const sendMessage: ISendMessage = (payload) => {
		const { chatId, text } = payload;
		if (text !== "") {
			if (chatId === "user-a") {
				const { room, name } = userA;
				const $payload = { name, room, text };
				socketUserA.emit("send-message", $payload);
			}
			if (chatId === "user-b") {
				const { room, name } = userB;
				const $payload = { name, room, text };
				socketUserB.emit("send-message", $payload);
			}
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
						<Chat
							room={userA.room}
							myName={userA.name}
							stateChat={chatUserA}
							sendMessage={sendMessage}
							chatId="user-a"
							handleQuit={handleQuit}
						/>
					)}
				</div>
				{test ? (
					<div className="coffee-chat__user-b">
						{!userB.active ? (
							<Join handleSignIn={handleSignIn} chatId="user-b" />
						) : (
							<Chat
								room={userB.room}
								myName={userB.name}
								stateChat={chatUserB}
								sendMessage={sendMessage}
								chatId="user-b"
								handleQuit={handleQuit}
							/>
						)}
					</div>
				) : null}
			</div>
		</>
	);
};

export default CoffeChat;
