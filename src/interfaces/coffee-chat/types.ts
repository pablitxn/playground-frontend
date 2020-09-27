import { IUser } from "./IUser";
import { IMessage } from "./IMessage";

/****  Custom Hooks  ****/

export type IUseJoinSocket = (
	user: IUser,
	socket: SocketIOClient.Socket
) => void;

export type IStateChat = { messages: IMessage[]; users: IUser[] };
export type IUseChat = (socket: SocketIOClient.Socket) => IStateChat;

interface ISession {
	handleSignIn: any;
	handleTest: () => void;
	userA: IUser;
	userB: IUser;
	test: boolean;
	handleQuit: IHandleQuit;
}
export type IUseSession = () => ISession;

/****  Utils  ****/

interface SignInPayload {
	name: string;
	room: string;
	chatId: "user-a" | "user-b";
}
export type IHandleSignIn = (payload: SignInPayload) => void;
interface SendMessagePayload {
	chatId: string;
	text: string;
}
export type ISendMessage = (payload: SendMessagePayload) => void;

export type ChatId = "user-a" | "user-b";
export type IHandleQuit = (chatId: ChatId) => void;
