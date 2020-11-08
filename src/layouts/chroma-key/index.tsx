// React
import { FC } from "react";
// Types
import { IHandleConfigs, IChromaConfigs } from "interfaces/chroma-key";
// Components
import Canvas from "components/chroma-key/canvas";
import ChromaConfigs from "components/chroma-key/configs";
// Styles
import "./styles.less";

interface IChromaLayout {
	handleConfigs: IHandleConfigs;
	chromaConfig: IChromaConfigs;
}

const ChromaLayout: FC<IChromaLayout> = ({ chromaConfig, handleConfigs }) => {
	return (
		<div className="chroma-key">
			<ChromaConfigs
				handleConfigs={handleConfigs}
				chromaConfig={chromaConfig}
			/>
			<Canvas chromaConfig={chromaConfig} />
		</div>
	);
};

export default ChromaLayout;
