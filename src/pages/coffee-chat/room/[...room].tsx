// React
import { FC, useEffect, useState } from "react";
// Layouts
import RoomLayout from "layouts/coffee-chat/room";
// Hooks
import { useCoffeChat } from "hooks/useCoffeeChat";
// Router
import { useRouter } from "next/router";
// Websockets
import io from "socket.io-client";

const WEBSOCKET_URL = "http://localhost:4420/";

const Room: FC = () => {
	const [room, setRoom] = useState("");
	const router = useRouter();
	// irá un let vacio y desp instanciar via useEffect? nolose
	const socket = io(WEBSOCKET_URL);
	// const { handleChat, users } = useCoffeChat();

	// real
	const [state, setState] = useState({
		room: "",
		me: "",
		messages: [{ message: { user: "prueba", text: "hola soy peron" } }],
		users: [{ user: "" }],
		message: ""
	});

	useEffect(() => {
		if (router.query.room) {
			// Identifico la room y el usuario
			const room = router.query.room[0];
			const me = router.query.me;
			// @ts-ignore
			setState({ ...state, me, room });

			socket.emit("join", { me, room }, (error) => {
				if (error) {
					alert(error);
				}
			});
			console.log(router.query);
		}
	}, [router, WEBSOCKET_URL]);

	useEffect(() => {
		socket.on("message", (message) => {
			setState({
				...state,
				messages: [
					...state.messages,
					{
						message: {
							text: message,
							user: "test"
						}
					}
				]
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
			console.log(message);
			console.log(socket);
		}
	};

	useEffect(() => {
		console.log(state);
	}, [state]);

	const handleChat = {
		messages: state.messages,
		me: state.me,
		sendMessage
	};

	const users = state.users;

	return (
		<>
			<RoomLayout handleChat={handleChat} room={room} users={users} />
		</>
	);
};

export default Room;
