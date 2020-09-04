// Types
import { FC } from "react";
import "./global-cases.styles.less";

interface IGlobalCases {
	className: string;
	globalCases: string;
}

const GlobalCases: FC<IGlobalCases> = ({ className, globalCases }) => {
	return (
		<div className={`global-cases ${className}`}>
			<h2 className="global-cases__title">Casos Globales</h2>
			<span className="global-cases__cases">{globalCases}</span>
		</div>
	);
};

export default GlobalCases;
