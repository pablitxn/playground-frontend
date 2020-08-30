// Types
import { FC } from "react";

interface ILastUpdate {
	className: string;
}

const LastUpdate: FC<ILastUpdate> = ({ className }) => {
	return (
		<div className={className}>
			<span>hola</span>
		</div>
	);
};

export default LastUpdate;
