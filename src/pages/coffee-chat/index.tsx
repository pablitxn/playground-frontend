// React
import { FC, useState, useEffect } from "react";
// Components
import Join from "components/coffee-chat/join";
import Room from "components/coffee-chat/room";
// Hooks
import { useCoffeeChat } from "hooks/useCoffeeChat";
// Websockets
import io from "socket.io-client";
// Styles
import "./styles.less";

const WEBSOCKET_URL = "http://localhost:4420/";

const CoffeChat: FC = () => {
	// handle view //
	const [session, setSession] = useState({
		test: false,
		userA: {
			active: false,
			room: "",
			name: ""
		},
		userB: {
			active: false,
			room: "",
			name: ""
		}
	});
	const handleTest = () => setSession({ ...session, test: !session.test });

	// handle sessions //
	const handleSignIn = (payload: any) => {
		const { name, room, chatId } = payload;

		if (chatId === "user-a") {
			setSession({ ...session, userA: { active: true, name, room } });
		}

		if (chatId === "user-b") {
			setSession({ ...session, userB: { active: true, name, room } });
		}
	};

	// handle rooms //
	const [rooms, setRooms] = useState({
		roomA: {
			messages: [{ message: { user: "", text: "" } }],
			users: [{ user: "" }]
		},
		roomB: {
			messages: [{ message: { user: "", text: "" } }],
			users: [{ user: "" }]
		}
	});

	/** handle chat ******************************************************************************/
	const socketUserA = io(WEBSOCKET_URL);
	const socketUserB = io(WEBSOCKET_URL);

	// join chat //
	useEffect(() => {
		const { userA, userB } = session;
		if (userA.active) {
			const { name, room } = userA;
			socketUserA.emit("join", { name, room }, (error) => {
				if (error) {
					console.log("socket join", error);
				}
			});
		}
		if (userB.active) {
			const { name, room } = userB;
			socketUserB.emit("join", { name, room }, (error) => {
				if (error) {
					console.log("socket join", error);
				}
			});
		}
	}, [session]);

	// Websockets connection //
	useEffect(() => {
		const { roomA, roomB } = rooms;
		// connections in user-a //
		socketUserA.on("message", ({ user, text }) => {
			const { messages: prevMessages } = roomA;
			setRooms({
				...rooms,
				roomA: {
					...roomA,
					messages: [...prevMessages, { message: { text, user } }]
				}
			});
		});
		socketUserA.on("roomData", ({ users }) => {
			setRooms({ ...rooms, roomA: { ...roomA, users } });
		});
		// connections in user-b //
		socketUserB.on("message", ({ user, text }) => {
			const { messages: prevMessages } = roomB;
			setRooms({
				...rooms,
				roomB: {
					...roomB,
					messages: [...prevMessages, { message: { text, user } }]
				}
			});
		});
		socketUserB.on("roomData", ({ users }) => {
			setRooms({ ...rooms, roomB: { ...roomB, users } });
		});
	}, []);

	const sendMessageA = (message) => {
		if (message !== "") {
			socketUserA.emit("sendMessage", message);
		}
	};

	const sendMessageB = (message) => {
		if (message !== "") {
			socketUserB.emit("sendMessage", message);
		}
	};

	/** se va para el coso  */
	const roomUserA = {
		handleChat: {
			name: session.userA.name,
			room: session.userA.room,
			messages: rooms.roomA.messages,
			sendMessage: sendMessageA
		}
	};
	const roomUserB = {
		handleChat: {
			name: session.userB.name,
			room: session.userB.room,
			messages: rooms.roomB.messages,
			sendMessage: sendMessageB
		}
	};

	return (
		<>
			<button onClick={handleTest} className="coffee-chat__action-test">
				test
			</button>
			<div className="coffee-chat">
				<div className="coffee-chat__user-a">
					{!session.userA.active ? (
						<Join handleSignIn={handleSignIn} chatId="user-a" />
					) : (
						<Room handleRoom={roomUserA} chatId="user-a" />
					)}
				</div>
				{session.test ? (
					<div className="coffee-chat__user-b">
						{!session.userB.active ? (
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
