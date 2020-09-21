// React
import { FC } from "react";
// Components
import Canvas from "components/chroma-key/canvas";
import ChromaConfigs from "components/chroma-key/configs";
// Styles
import "./styles.less";

interface IChromaLayout {
	handleConfigs: () => void;
	handleCanvas: () => void;
}

const ChromaLayout: FC<IChromaLayout> = ({ handleCanvas, handleConfigs }) => {
	return (
		<div className="chroma-key">
			<ChromaConfigs handleConfigs={handleConfigs} />
			<Canvas handleCanvas={handleCanvas} />
		</div>
	);
};

export default ChromaLayout;
