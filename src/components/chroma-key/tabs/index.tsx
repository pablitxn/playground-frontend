// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// Components
import ColorsTab from "components/chroma-key/tabs/colors";
import ImagesTab from "components/chroma-key/tabs/background";
import GalleryTab from "components/chroma-key/tabs/gallery";
import UploadTab from "components/chroma-key/tabs/upload";
// AntD
import { Tabs } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const ChromaConfigurations: FC = () => {
	const [currentTab, setCurrentTab] = useState("colors");

	const handleTab = (value) => setCurrentTab(value)


	const handleColor = () => {};

	return (
		<Tabs defaultActiveKey="1" onChange={handleTab} activeKey={currentTab}>
			<TabPane tab="Colores" key="colors">
				<ColorsTab onSetColor={handleColor} />
			</TabPane>
			<TabPane tab="Imagenes" key="images">
				<ImagesTab />
			</TabPane>
			<TabPane tab="Imagenes subidas" key="gallery">
				<GalleryTab />
			</TabPane>
			<TabPane tab="Subí tu fondo" key="upload">
				<UploadTab />
				<BgColorsOutlined />
			</TabPane>
		</Tabs>
	);
};

export default ChromaConfigurations;
