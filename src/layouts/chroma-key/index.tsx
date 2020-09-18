// React
import { FC } from "react";
// Components
import Canvas from "components/chroma-key/canvas";
import ChromaConfigs from "components/chroma-key/configs";
// Styles
import "./styles.less";

const Chroma: FC = () => {
	return (
		<div className="chroma-key">
			<ChromaConfigs className="chroma-key__configs" />
			<Canvas className="chroma-key__canvas" />
		</div>
	);
};

export default Chroma;
