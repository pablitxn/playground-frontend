// React
import { FC } from "react";
// Layouts
import ChromaKeyLayout from "layouts/chroma-key";
// Styles
import "./styles.less";

const ChromaView: FC = () => {
	return (
		<div className="chroma-view">
			<div className="card">
				<ChromaKeyLayout />
			</div>
		</div>
	);
};

export default ChromaView;
