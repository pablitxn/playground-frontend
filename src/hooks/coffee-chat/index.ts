// React
import { useEffect, useState } from "react";
// Types
import {
	IUseJoinSocket,
	IUseChat,
	IUseSession,
	IHandleSignIn,
	IUser,
	IMessage,
	IHandleQuit
} from "interfaces/coffee-chat";

export const useJoinSocket: IUseJoinSocket = (user, socket) => {
	useEffect(() => {
		const { name, room, active } = user;

		if (active) {
			socket.emit("join", { name, room }, (error) => {
				if (error) {
					console.log(`socket error -> `, error);
				}
			});
		}
	}, [user]);
};

export const useChat: IUseChat = (socket) => {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [users, setUsers] = useState<IUser[]>([]);

	socket.on("info-message", (message) => {
		setMessages((messages) => [...messages, message]);
	});
	socket.on("roomData", ({ users }) => {
		setUsers({ ...users, users });
	});
	socket.on("new-message", (message) => {
		setMessages((messages) => [...messages, message]);
	});

	return { messages, users };
};

export const useSession: IUseSession = () => {
	const [state, setState] = useState({
		test: false,
		userA: {
			active: false,
			room: "",
			name: ""
		},
		userB: {
			active: false,
			name: "",
			room: ""
		}
	});

	const handleTest = () => setState({ ...state, test: !state.test });

	const handleSignIn: IHandleSignIn = (payload) => {
		const { name, room, chatId } = payload;
		chatId === "user-a" &&
			setState({ ...state, userA: { active: true, name, room } });

		chatId === "user-b" &&
			setState({ ...state, userB: { active: true, name, room } });
	};

	const handleQuit: IHandleQuit = (chatId) => {
		if (chatId === "user-a") {
			setState((prevState) => ({
				...prevState,
				userA: {
					active: false,
					room: "",
					name: ""
				},
				test: false
			}));
		}
		if (chatId === "user-b") {
			setState((prevState) => ({
				...prevState,
				userB: {
					active: false,
					room: "",
					name: ""
				},
				test: false
			}));
		}
	};

	const { test, userA, userB } = state;

	return { handleSignIn, handleTest, userA, userB, test, handleQuit };
};
