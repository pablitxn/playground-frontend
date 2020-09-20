// Types
import { FC, ReactNode, useState } from "react";
// AntD
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import Navigation from "components/_shared/nativagation";

// Definitions
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

interface IAppLayout {
	children: ReactNode;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);

	const handleCollapse = () => setCollapsed(!collapsed);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
				<div className="logo" />
				<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
					<Menu.Item key="1" >
						<Navigation href="/">Welcome</Navigation>
					</Menu.Item>
					<Menu.Item key="3" >
						<Navigation href="/covid-map">Covid-Map</Navigation>
					</Menu.Item>
					<Menu.Item key="4" >
						<Navigation href="/chroma-key">Croma customizable</Navigation>
					</Menu.Item>
					<Menu.Item key="5" >
						<Navigation href="/ecommerce">Ecommerce</Navigation>
					</Menu.Item>
					<Menu.Item key="6" >
						<Navigation href="/backoffice">Backoffice</Navigation>
					</Menu.Item>
					<SubMenu key="juegos" title="Random">
						<Menu.Item key="7">Ta-te-ti</Menu.Item>
						<Menu.Item key="8">Slider 360</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Content style={{ margin: "0 16px" }}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
