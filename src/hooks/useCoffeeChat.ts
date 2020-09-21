// React
import { useState, useEffect } from "react";
// Services
import queryString from "query-string";
import io from "socket.io-client";

const ENDPOINT = "https://project-chat-application.herokuapp.com/";
let socket;

export const useCoffeChat = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [users, setUsers] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setRoom(room as string);
		setName(name as string);

		socket.emit("join", { name, room }, (error) => {
			if (error) {
				alert(error);
			}
		});
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages((messages) => [...messages, message]);
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	const chatData = {
		room,
		messages,
		name,
		message,
		setMessage,
		sendMessage,
		users
	};

	return chatData;
};
