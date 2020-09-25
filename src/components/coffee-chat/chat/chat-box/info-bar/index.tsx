// React
import { FC } from "react";
// Types
import { IHandleQuit, ChatId } from "interfaces/coffee-chat";
// Assets
import OnlineIcon from "assets/icons/coffee-chat/onlineIcon";
import CloseIcon from "assets/icons/coffee-chat/closeIcon";

import "./styles.less";

interface IInfoBar {
	room: string;
	handleQuit: IHandleQuit;
	chatId: ChatId;
	myName: string;
}

const InfoBar: FC<IInfoBar> = ({ room, handleQuit, chatId, myName }) => {
	const handleClick = () => {
		handleQuit(chatId);
	};

	return (
		<div className="info-bar">
			<div className="info-bar__header">
				<span className="info-bar__my-name">{myName}</span>
				<h2 className="info-bar__room">{room.toUpperCase()}</h2>
			</div>
			<div className="info-bar__actions">
				<button onClick={handleClick}>salir</button>
			</div>
		</div>
	);
};

export default InfoBar;
