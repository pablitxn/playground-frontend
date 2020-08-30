// Types
import { FC } from "react";

interface IGlobalCases {
	className: string;
}

const GlobalCases: FC<IGlobalCases> = ({ className }) => {
	return (
		<div className={className}>
			<span>hola</span>
		</div>
	);
};

export default GlobalCases;
