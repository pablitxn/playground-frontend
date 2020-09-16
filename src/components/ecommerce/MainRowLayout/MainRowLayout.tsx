// React
import { FC, ReactNode } from "react";
// AntD
import { Layout, Row } from "antd";

interface IMainRowLayout {
	children: ReactNode;
	className?: string;
}

const MainRowLayout: FC<IMainRowLayout> = ({ children, className }) => {
	return (
		<Layout className="boxed-width">
			<Row className={className} gutter={[24, 24]}>
				{children}
			</Row>
		</Layout>
	);
};

export default MainRowLayout;
