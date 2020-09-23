// React
import { FC } from "react";
// Assets
import OnlineIcon from "assets/icons/coffee-chat/onlineIcon";
import CloseIcon from "assets/icons/coffee-chat/closeIcon";

import "./styles.less";

interface IInfoBar {
	room: any;
}

const InfoBar: FC<IInfoBar> = ({ room }) => (
	<div className="info-bar">
		<div className="info-bar__room">
			{/* <img className="online-icon" src={onlineIcon} alt="online icon" /> */}
			<OnlineIcon />
			<h3>{`test peronista - sala ${room}`}</h3>
		</div>
		<div className="info-bar__actions">
			<a href="/">
				{/* <img src={closeIcon} alt="close icon" /> */}
				<CloseIcon />
			</a>
		</div>
	</div>
);

export default InfoBar;
