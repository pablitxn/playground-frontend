// Types
import { FC } from "react";
import { ChromaColor, IHandleConfigs } from "interfaces/chroma-key";
// AntD
import { Form } from "antd";
// Color Picker
import { HuePicker } from "react-color";
// Styles
import "./styles.less";

interface IColorsTab {
	handleBackgroundColor: IHandleConfigs["handleBackgroundColor"];
	chromaColor: ChromaColor;
}

const ColorsTab: FC<IColorsTab> = ({ handleBackgroundColor, chromaColor }) => {
	/** Handlers */
	const handleReplaceColor = ({ rgb }) => {
		handleBackgroundColor(rgb);
	};

	return (
		<Form className="colors-form">
			<Form.Item>
				<h3>Seleccioná un color para reemplazar </h3>
				<HuePicker color={chromaColor} onChange={handleReplaceColor} />
			</Form.Item>
		</Form>
	);
};

export default ColorsTab;
