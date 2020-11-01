// Types
import { FC } from "react";
import { ChromaColor, IHandleConfigs } from "interfaces/chroma-key";
// Hooks
import { useState } from "react";
// Components
import ColorsTab from "./tabs/colors";
import ImagesTab from "./tabs/images";
import GalleryTab from "./tabs/gallery";
import UploadTab from "./tabs/upload";
// AntD
import { Tabs } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
// Styles
import "./styles.less";

const { TabPane } = Tabs;

interface IChromaConfigs {
	handleConfigs: IHandleConfigs;
	chromaColor: ChromaColor;
}

const ChromaConfigs: FC<IChromaConfigs> = ({ handleConfigs, chromaColor }) => {
	/** Tabs */
	const [currentTab, setCurrentTab] = useState("colors");
	const handleTab = (value: string) => setCurrentTab(value);

	/** Handle Configs */
	const { handleBackgroundColor } = handleConfigs;

	return (
		<div className="chroma-configs">
			<Tabs defaultActiveKey="1" onChange={handleTab} activeKey={currentTab}>
				<TabPane tab="Colores" key="colors">
					<ColorsTab
						handleBackgroundColor={handleBackgroundColor}
						chromaColor={chromaColor}
					/>
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
