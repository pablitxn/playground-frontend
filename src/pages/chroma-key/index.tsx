// React
import { FC, useState } from "react";
// Types
import { ChromaColor } from "interfaces/chroma-key";
// Layouts
import ChromaKeyLayout from "layouts/chroma-key";
// Styles
import "./styles.less";

const ChromaView: FC = () => {
	/** Definitions */
	const [color, setColor] = useState<ChromaColor>("green");

	/** Handle Configs */
	const handleBackgroundImage = (image: any) => {};
	const handleBackgroundColor = (newColor: ChromaColor) => setColor(newColor);

	return (
		<div className="chroma-view">
			<div className="card">
				<ChromaKeyLayout
					handleConfigs={{ handleBackgroundColor, handleBackgroundImage }}
					chromaConfig={{ chromaColor: color, backgroundImage: undefined }}
				/>
			</div>
		</div>
	);
};

export default ChromaView;
