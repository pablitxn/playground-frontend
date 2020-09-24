// React
import { useEffect, useState } from "react";
// Websockets
import io from "socket.io-client";

const WEBSOCKET_URL = "http://localhost:4420/";

export const useCoffeeChat = ({ name, room }) => {
	const [state, setState] = useState({
		messages: [{ message: { user: "", text: "" } }],
		users: [{ user: "" }]
	});

	const socket = io(WEBSOCKET_URL);

	useEffect(() => {
		socket.emit("join", { name, room }, (error) => {
			if (error) {
				console.log("socket join", error);
			}
		});
	}, []);

	useEffect(() => {
		socket.on("message", ({ user, text }) => {
			const { messages: prevMessages } = state;
			setState({
				...state,
				messages: [...prevMessages, { message: { text, user } }]
			});
		});

		socket.on("roomData", ({ users }) => {
			setState({
				...state,
				users
			});
		});
	}, []);

	const sendMessage = (message) => {
		if (message !== "") {
			socket.emit("sendMessage", message);
		}
	};

	const { users, messages } = state;
	const handleChat = { messages, name };

	return { users, handleChat, sendMessage };
};
