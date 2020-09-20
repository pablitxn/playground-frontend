// Types
import { FC, ReactNode, useEffect, useState } from "react";
// AntD
import { Layout, Menu } from "antd";
import Navigation from "components/_shared/nativagation";
// Router
import { useRouter } from "next/router";

// Definitions
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

interface IAppLayout {
	children: ReactNode;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
	const router = useRouter();
	const [state, setState] = useState({
		collapsed: false,
		defaultKey: [router.asPath]
	});

	const handleCollapse = () => setState({ ...state, collapsed: !collapsed });

	const { collapsed, defaultKey } = state;

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={defaultKey}>
					<Menu.Item key="/">
						<Navigation href="/">Welcome</Navigation>
					</Menu.Item>
					<Menu.Item key="/covid-map">
						<Navigation href="/covid-map">Covid-Map</Navigation>
					</Menu.Item>
					<Menu.Item key="/chroma-key">
						<Navigation href="/chroma-key">Croma customizable</Navigation>
					</Menu.Item>
					<Menu.Item key="/ecommerce">
						<Navigation href="/ecommerce">Ecommerce</Navigation>
					</Menu.Item>
					<Menu.Item key="/backoffice">
						<Navigation href="/backoffice">Backoffice</Navigation>
					</Menu.Item>
					<SubMenu key="submenu" title="Random">
						<Menu.Item key="/ta-te-ti">Ta-te-ti</Menu.Item>
						<Menu.Item key="/slider-360">Slider 360</Menu.Item>
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
