// React
import { FC, ReactNode } from "react";
// Components
import HeaderMeta from "./HeaderMeta";
import MainNav from "./MainNav/MainNav";
import MainFooter from "./MainFooter";
// AntD
import { Layout } from "antd";

const { Content } = Layout;

interface IMainLayout {
	children: ReactNode;
	title: string;
}

const MainLayout: FC<IMainLayout> = ({ children, title }) => {
	return (
		<>
			<HeaderMeta title={title} />
			<Layout>
				<MainNav />
				<Content style={{ minHeight: "500px" }}>{children}</Content>
				<MainFooter />
			</Layout>
		</>
	);
};

export default MainLayout;
