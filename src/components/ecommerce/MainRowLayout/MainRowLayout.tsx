// React
import { FC, ReactNode } from "react";
// AntD
import { Layout, Row } from "antd";

interface IMainRowLayout {
	children: ReactNode;
	rowClassName?: string;
}

const MainRowLayout: FC<IMainRowLayout> = ({ children, rowClassName }) => {
	return (
		<Layout className="boxed-width">
			<Row className={rowClassName} gutter={[24, 24]}>
				{children}
			</Row>
		</Layout>
	);
};

export default MainRowLayout;
