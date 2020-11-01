// Types
import { FC } from "react";
import { ChromaColor, IHandleConfigs } from "interfaces/chroma-key";
// AntD
import { Form, Radio } from "antd";
// Styles
import "./styles.less";
import { RadioChangeEvent } from "antd/lib/radio";

interface IColorsTab {
	handleBackgroundColor: IHandleConfigs["handleBackgroundColor"];
	chromaColor: ChromaColor;
}

const ColorsTab: FC<IColorsTab> = ({ handleBackgroundColor, chromaColor }) => {
	/** Handlers */
	const handleReplaceColor = (event: RadioChangeEvent) => {
		const { value: newColor } = event.target;
		handleBackgroundColor(newColor);
	};

	return (
		<Form className="colors-form">
			<Form.Item>
				<h3>Seleccioná un color para reemplazar </h3>
				<Radio.Group onChange={handleReplaceColor} value={chromaColor}>
					<Radio value={"red"}>Rojo</Radio>
					<Radio value={"green"}>Verde</Radio>
					<Radio value={"blue"}>Azul</Radio>
				</Radio.Group>
			</Form.Item>
		</Form>
	);
};

export default ColorsTab;
