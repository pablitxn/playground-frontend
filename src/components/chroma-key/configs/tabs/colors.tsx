// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// AntD
import { Form, Col, Row, Input } from "antd";
// import { BgColorsOutlined } from "@ant-design/icons";
// Color Picker
import { HuePicker } from "react-color";
// Styles
import "./styles.less";

interface IColorsTab {
	onSetColor: () => void;
}

const ColorsTab: FC<IColorsTab> = ({ onSetColor }) => {
	const [chroma, setChroma] = useState("#fffff");
	const [sensibility, setSensibility] = useState({ r: 0, g: 0, b: 0, a: 0 });
	const [replaceColor, setReplaceColor] = useState("#fffff");

	const handleChroma = (color) => setChroma(color.hex);
	const handleReplaceColor = (color) => setReplaceColor(color.hex);

	return (
		<Form className="colors-form">
			<Form.Item>
				<h3>Seleccioná un color para reemplazar </h3>
				<HuePicker color={replaceColor} onChange={handleReplaceColor} />
			</Form.Item>
		</Form>
	);
};

export default ColorsTab;
