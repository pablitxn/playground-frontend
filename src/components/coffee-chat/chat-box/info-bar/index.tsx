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
	<div className="infoBar">
		<div className="leftInnerContainer">
			{/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
			<OnlineIcon />
			<h3>{room}</h3>
		</div>
		<div className="rightInnerContainer">
			<a href="/">
				{/* <img src={closeIcon} alt="close icon" /> */}
				<CloseIcon />
			</a>
		</div>
	</div>
);

export default InfoBar;
