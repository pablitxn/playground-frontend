// Types
import { FC } from "react";

interface IFooter {
	className: string;
}

const Footer: FC<IFooter> = ({ className }) => {
	return (
		<div className={className}>
			<span>hola</span>
		</div>
	);
};

export default Footer;
