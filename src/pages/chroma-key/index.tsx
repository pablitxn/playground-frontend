// React
import { FC } from "react";
// Layouts
import ChromaKeyLayout from "layouts/chroma-key";
// Styles
import "./styles.less";

const ChromaView: FC = () => {
	const handleCanvas = () => {};
	const handleConfigs = () => {};

	return (
		<div className="chroma-view">
			<div className="card">
				<ChromaKeyLayout
					handleCanvas={handleCanvas}
					handleConfigs={handleConfigs}
				/>
			</div>
		</div>
	);
};

export default ChromaView;
