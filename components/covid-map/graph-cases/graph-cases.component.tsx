// Types
import { FC } from "react";
// Styles
import "./graph-cases.styles.less";

interface IGraphCases {
	className: string;
}

const GraphCases: FC<IGraphCases> = ({ className }) => {
	return (
		<div className={`graph-cases ${className}`}>
			<div className="graph-cases__content">
				<span>proximamente gráfico</span>
			</div>
		</div>
	);
};

export default GraphCases;
