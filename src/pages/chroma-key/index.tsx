// React
import { FC, useState } from "react";
// Types
import { ChromaColor } from "interfaces/chroma-key";
// Layouts
import ChromaKeyLayout from "layouts/chroma-key";
// Styles
import "./styles.less";

type State = {
	color: ChromaColor;
	intensity: number;
};

const ChromaView: FC = () => {
	/** Definitions */
	const [state, setState] = useState<State>({
		color: "green",
		intensity: 90
	});
	const { color: chromaColor, intensity: chromaIntensity } = state;

	/** Handle Configs */
	const handleBackgroundImage = (image: any) => {};
	const handleBackgroundColor = (color: ChromaColor, intensity: number) =>
		setState({ color, intensity });

	return (
		<div className="chroma-view">
			<div className="card">
				<ChromaKeyLayout
					handleConfigs={{ handleBackgroundColor, handleBackgroundImage }}
					chromaConfig={{
						chromaColor,
						backgroundImage: undefined,
						chromaIntensity
					}}
				/>
			</div>
		</div>
	);
};

export default ChromaView;
