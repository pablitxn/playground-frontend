// @ts-nocheck
// Types
import { FC } from "react";
// Hooks
import useTimeAgo from "hooks/useTimeAgo";
import useDateTimeFormat from "hooks/useDateTimeFormat";
// Styles
import "./styles.less";

interface ILastUpdate {
	className: string;
}

const LastUpdate: FC<ILastUpdate> = ({ className }) => {
	const createdAt = new Date();
	const timeago = useTimeAgo(createdAt);
	const createdAtFormated = useDateTimeFormat(createdAt);

	return (
		<div className={`last-update ${className}`}>
			<h2 className="last-update__title">Última actualización</h2>
			<span className="last-update__subtitle">{createdAtFormated}</span>
			<time title={createdAtFormated}>{timeago}</time>
		</div>
	);
};

export default LastUpdate;
