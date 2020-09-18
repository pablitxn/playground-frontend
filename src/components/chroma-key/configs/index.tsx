// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// Components
import ColorsTab from "./tabs/colors";
import ImagesTab from "./tabs/background";
import GalleryTab from "./tabs/gallery";
import UploadTab from "./tabs/upload";
// AntD
import { Tabs } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
// Styles
import "./styles.less"

const { TabPane } = Tabs;

interface IChromaConfigs {
	className: string;
}

const ChromaConfigs: FC<IChromaConfigs> = ({ className }) => {
	const [currentTab, setCurrentTab] = useState("colors");

	const handleTab = (value) => setCurrentTab(value);

	const handleColor = () => {};

	return (
		<div className={`chroma-configs ${className}`}>
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
		</div>
	);
};

export default ChromaConfigs;
