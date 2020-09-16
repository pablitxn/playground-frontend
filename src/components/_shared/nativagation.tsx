// Types
import { FC, ReactNode } from "react";
// Router
import Link from "next/link";

interface INavigation {
	children: ReactNode;
	className?: string;
	href: string;
}

const Navigation: FC<INavigation> = ({ className, href, children }) => {
	return (
		<Link href={href}>
			<a className={className}>{children}</a>
		</Link>
	);
};

export default Navigation;
