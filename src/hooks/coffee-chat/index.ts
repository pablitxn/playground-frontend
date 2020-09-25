// React
import { useEffect, useState } from "react";

export const useJoinSocket = (user, socket) => {
	useEffect(() => {
		if (user.active) {
			const { name, room } = user;
			socket.emit("join", { name, room }, (error) => {
				if (error) {
					console.log(`socket error -> `, error);
				}
			});
		}
	}, [user]);
};

export const useChat = (socket) => {
	const [state, setState] = useState({
		messages: [{ message: { user: "", text: "" } }],
		users: [{ user: "" }]
	});

	useEffect(() => {
		socket.on("message", ({ user, text }) => {
			const { messages: prevMessages } = state;
			setState({
				...state,
				messages: [...prevMessages, { message: { text, user } }]
			});
		});
		socket.on("roomData", ({ users }) => {
			setState({ ...state, users });
		});
	}, []);

	return state;
};

export const useSession = () => {
	const [state, setState] = useState({
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

	const handleTest = () => setState({ ...state, test: !state.test });

	const handleSignIn = (payload: any) => {
		const { name, room, chatId } = payload;
		chatId === "user-a" &&
			setState({ ...state, userA: { active: true, name, room } });

		chatId === "user-b" &&
			setState({ ...state, userB: { active: true, name, room } });
	};

	const { test, userA, userB } = state;

	return { handleSignIn, handleTest, userA, userB, test };
};
