// React
import { FC } from "react";
// Assets
import OnlineIcon from "assets/icons/coffee-chat/onlineIcon";

import "./styles.less";
import { Divider } from "antd";

interface IPanel {
	users: any;
}

const Panel: FC<IPanel> = ({ users }) => (
	<div className="panel">
		{users ? (
			<>
				<h1 className="panel__title">usuarios conectados</h1>
				<Divider className="panel__divider" />
				<div className="panel__active-users">
					<h2>
						{users.map(({ name }) => (
							<div key={name} className="panel__user">
								{name}
								<OnlineIcon />
							</div>
						))}
					</h2>
				</div>
			</>
		) : null}
	</div>
);

export default Panel;
