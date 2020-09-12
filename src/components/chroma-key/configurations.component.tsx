// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// Components
import ColorsTab from "components/chroma-key/colors-tab.component";
import ImagesTab from "components/chroma-key/images-tab.component";
import GalleryTab from "components/chroma-key/gallery-tab.component";
import UploadTab from "components/chroma-key/upload-tab.component";
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
			<TabPane tab="Imagenes" key="2">
				<ImagesTab />
			</TabPane>
			<TabPane tab="Imagenes subidas" key="3">
				<GalleryTab />
			</TabPane>
			<TabPane tab="Subí tu fondo" key="4">
				<UploadTab />
			</TabPane>
		</Tabs>
	);
};

export default ChromaConfigurations;
