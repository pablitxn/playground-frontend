// React
import { FC, useState } from "react";
// Types
import { ChromaColor } from "interfaces/chroma-key";
// Layouts
import ChromaKeyLayout from "layouts/chroma-key";
// Styles
import "./styles.less";
// Utils
import { initialStateChroma, initialColor } from "utils/chroma-key";

const ChromaView: FC = () => {
	// const [chromaConfig, setChromaConfig] = useState(initialStateChroma);

	/** test */
	const [color, setColor] = useState(initialColor);

	/** Handle Configs */
	const handleBackgroundImage = (image: any) => {
		// setChromaConfig((prevState) => ({
		// 	...prevState,
		// 	backgroundImage: image
		// }));
	};

	const handleBackgroundColor = (newColor: ChromaColor) => setColor(newColor);

	const handleConfigs = {
		handleBackgroundColor,
		handleBackgroundImage
	};
	const chromaConfig = {
		chromaColor: color,
		backgroundImage: undefined
	};

	return (
		<div className="chroma-view">
			<div className="card">
				<ChromaKeyLayout
					handleConfigs={handleConfigs}
					chromaConfig={chromaConfig}
				/>
			</div>
		</div>
	);
};

export default ChromaView;

// const handleBackgroundColor = (color: ChromaColor) => {
// 	setChromaConfig((prevState) => ({
// 		...prevState,
// 		chromaColor: color
// 	}));
// };
