// Rect
import { FC, useState } from "react";
// AntD
import { Tabs } from "antd";
import {
	AppstoreOutlined,
	SettingOutlined,
	MailOutlined
} from "@ant-design/icons";

const { TabPane } = Tabs;

const ChromaOptions: FC = () => {
	const [state, setState] = useState({ collapsed: false, current: "" });

	const handleTab = (menuKey) => {
		// setState({
		// 	...state,
		// 	current: menuKey
		// });
		console.log(menuKey);
	};

	const { collapsed, current } = state;

	return (
		<Tabs defaultActiveKey="1" onChange={handleTab}>
			<TabPane tab="Tab 1" key="1">
				<ColorsTab />
			</TabPane>
			<TabPane tab="Tab 2" key="2">
				<OpacityTab />
			</TabPane>
			<TabPane tab="Tab 3" key="3">
				<ImageTab />
			</TabPane>
		</Tabs>
	);
};

export default ChromaOptions;
