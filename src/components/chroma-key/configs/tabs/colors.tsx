// Types
import { FC } from "react";
import { IChromaConfigs, IHandleConfigs } from "interfaces/chroma-key";
// AntD
import { Form, Radio, Slider } from "antd";
// Styles
import "./styles.less";
import { RadioChangeEvent } from "antd/lib/radio";

interface IColorsTab {
	handleBackgroundColor: IHandleConfigs["handleBackgroundColor"];
	chromaConfig: IChromaConfigs;
}

const ColorsTab: FC<IColorsTab> = ({ handleBackgroundColor, chromaConfig }) => {
	/** Definitions */
	const { chromaIntensity, chromaColor } = chromaConfig;

	/** Handlers */
	const handleReplaceColor = (event: RadioChangeEvent) => {
		const { value: newColor } = event.target;
		handleBackgroundColor(newColor, chromaIntensity);
	};

	const handleIntensity = (newIntensity) => {
		handleBackgroundColor(chromaColor, newIntensity);
		console.log(newIntensity);
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
			<Form.Item>
				<Slider
					min={1}
					max={255}
					defaultValue={90}
					onChange={handleIntensity}
					value={chromaIntensity}
					style={{ width: "20rem" }}
				/>
			</Form.Item>
		</Form>
	);
};

export default ColorsTab;
