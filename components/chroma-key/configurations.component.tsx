// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// Components
import ColorsTab from "components/chroma-key/colors-tab.component";
// AntD
import { Tabs } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const ChromaConfigurations: FC = () => {
	const [state, setState] = useState({ collapsed: false, current: "" });

	const handleTab = (menuKey) => {
		// setState({
		// 	...state,
		// 	current: menuKey
		// });
		console.log(menuKey);
	};

	const { collapsed, current } = state;

	const handleColor = () => {};

	return (
		<Tabs defaultActiveKey="1" onChange={handleTab}>
			<TabPane tab="Colores" key="1">
				<ColorsTab onSetColor={handleColor} />
			</TabPane>
			<TabPane tab="Tab 2" key="2">
				{/* <OpacityTab /> */}
				asd
			</TabPane>
			<TabPane tab="Tab 3" key="3">
				{/* <ImageTab /> */}
				asd
			</TabPane>
		</Tabs>
	);
};

export default ChromaConfigurations;
