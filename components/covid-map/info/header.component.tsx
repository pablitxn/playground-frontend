// Types
import { FC } from "react";

interface IHeader {
	className: string;
}

const Header: FC<IHeader> = ({ className }) => {
	return (
		<div className={className}>
			<span>hola</span>
		</div>
	);
};

export default Header;
