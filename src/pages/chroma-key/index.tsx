// React
import { FC } from "react";
// Components
import Canvas from "components/chroma-key/canvas";
import ChromaConfigs from "components/chroma-key/configs";

const Chroma: FC = () => {
	return (
		<>
			<ChromaConfigs />
			<Canvas />
		</>
	);
};

export default Chroma;
