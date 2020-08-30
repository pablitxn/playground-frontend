// Types
import { FC } from "react";

interface ICasesByFilter {
	className: string;
}

const CasesByFilter: FC<ICasesByFilter> = ({ className }) => {
	return (
		<div className={className}>
			<span>hola</span>
		</div>
	);
};

export default CasesByFilter;
