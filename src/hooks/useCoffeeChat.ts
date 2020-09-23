// React
import { useState, useEffect } from "react";
// Services
import queryString from "query-string";
import io from "socket.io-client";

const ENDPOINT = "https://project-chat-application.herokuapp.com/";
let socket;

export const useCoffeChat = () => {
	// const [name, setName] = useState("");
	// const [room, setRoom] = useState("");
	// const [users, setUsers] = useState("");
	// const [message, setMessage] = useState("");
	// const [messages, setMessages] = useState([]);

	// useEffect(() => {
	// 	// const { name, room } = queryString.parse(location.search);
	// 	const name = "";
	// 	const room = "";

	// 	socket = io(ENDPOINT);

	// 	setRoom(room as string);
	// 	setName(name as string);

	// 	socket.emit("join", { name, room }, (error) => {
	// 		if (error) {
	// 			alert(error);
	// 		}
	// 	});
	// }, [ENDPOINT /**location */]);

	// useEffect(() => {
	// 	socket.on("message", (message) => {
	// 		setMessages((messages) => [...messages, message]);
	// 	});

	// 	socket.on("roomData", ({ users }) => {
	// 		setUsers(users);
	// 	});
	// }, []);

	// const sendMessage = (event) => {
	// 	event.preventDefault();

	// 	if (message) {
	// 		socket.emit("sendMessage", message, () => setMessage(""));
	// 	}
	// };

	// const chatData = {
	// 	room,
	// 	messages,
	// 	name,
	// 	message,
	// 	setMessage,
	// 	sendMessage,
	// 	users
	// };

	const sendMessage = (message: string) => {
		console.log("mensaje enviado ->", message);
	};

	const handleChat = {
		messages: [
			{
				message: {
					text: "viva peron III de boedo, el mas noble",
					user: "el d13g0t3 _papusa"
				},
				name: "nosequeonda"
			},
			{
				message: {
					text: "la cuarta revolucion industrial esta en nuestra manos",
					user: "marita acosta"
				},
				name: "nosequeonda 2"
			}
		],
		name: "peron III de boedo",
		sendMessage
	};

	const users = [
		{ name: "lenin 4FA1", status: "online" },
		{ name: "carlo m4gn0 18 de castilla", status: "online" }
	];

	return { handleChat, users };
};
