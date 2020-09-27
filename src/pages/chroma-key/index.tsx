// React
import { FC } from "react";
// Layouts
import ChromaKeyLayout from "layouts/chroma-key";
// Styles
import "./styles.less";

const ChromaView: FC = () => {
	const handleConfigs = () => {};
	const handleCanvas = () => {};

	return (
		<div className="chroma-view">
			<div className="card">
				<ChromaKeyLayout
					handleConfigs={handleConfigs}
					handleCanvas={handleCanvas}
				/>
			</div>
		</div>
	);
};

export default ChromaView;
