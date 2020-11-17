// React
import { FC } from "react";
// Antd
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter: FC = () => {
	return (
		<Footer
			style={{
				textAlign: "center",
				marginTop: 50,
				backgroundColor: "lightgray"
			}}
		>
			playground - 2020
		</Footer>
	);
};

export default MainFooter;
