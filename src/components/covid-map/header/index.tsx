// Types
import { FC } from "react";
// Styles
import "./header.styles.less";

interface IHeader {
	className: string;
}

const Header: FC<IHeader> = ({ className }) => {
	return (
		<header className={`header ${className}`}>
			<h1 className="header__title">☣ CoVid 19 - Map ☣</h1>
		</header>
	);
};

export default Header;
