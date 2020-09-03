// Types
import { FC } from "react";

interface IGraphCases {
	className: string;
}

const GraphCases: FC<IGraphCases> = ({ className }) => {
	return (
		<div className={className}>
			<span>hola</span>
		</div>
	);
};

export default GraphCases;
