// React
import { FC, ReactNode, useEffect, useState } from "react";
// Components
import Navigation from "components/_shared/nativagation";
// AntD
import { Layout, Menu } from "antd";
import {
	HomeOutlined,
	GlobalOutlined,
	VideoCameraOutlined,
	ShopOutlined,
	AuditOutlined,
	CoffeeOutlined,
	PlayCircleOutlined
} from "@ant-design/icons";
// Router
import { useRouter } from "next/router";
// Styles
import "./styles.less";

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
		<Layout className="app-layout">
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={handleCollapse}
				className="app-layout__slider"
			>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={defaultKey}>
					<Menu.Item icon={<HomeOutlined />} key="/">
						<Navigation href="/">Welcome</Navigation>
					</Menu.Item>
					<Menu.Item icon={<GlobalOutlined />} key="/covid-map">
						<Navigation href="/covid-map">Covid-Map</Navigation>
					</Menu.Item>
					<Menu.Item icon={<VideoCameraOutlined />} key="/chroma-key">
						<Navigation href="/chroma-key">Croma customizable</Navigation>
					</Menu.Item>
					<Menu.Item icon={<ShopOutlined />} key="/ecommerce">
						<Navigation href="/ecommerce">Ecommerce</Navigation>
					</Menu.Item>
					<Menu.Item icon={<AuditOutlined />} key="/backoffice">
						<Navigation href="/backoffice">Backoffice</Navigation>
					</Menu.Item>
					<Menu.Item icon={<CoffeeOutlined />} key="/coffe-chat">
						<Navigation href="/coffee-chat">Coffee Chat</Navigation>
					</Menu.Item>
					<SubMenu
						icon={<PlayCircleOutlined />}
						key="three-js"
						title="Three JS"
					>
						<Menu.Item key="/three-js/boxes">
							<Navigation href="/three-js/boxes">boxes</Navigation>
						</Menu.Item>
						<Menu.Item key="/three-js/birds">
							<Navigation href="/three-js/birds">birds</Navigation>
						</Menu.Item>
					</SubMenu>
					<SubMenu icon={<PlayCircleOutlined />} key="submenu" title="Random">
						<Menu.Item key="/ta-te-ti">Ta-te-ti</Menu.Item>
						<Menu.Item key="/slider-360">Slider 360</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Navigation href="/" className="app-layout__home-button">
				<HomeOutlined />
			</Navigation>
			<Layout className="site-layout">
				<Content style={{ margin: "0 16px" }}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
