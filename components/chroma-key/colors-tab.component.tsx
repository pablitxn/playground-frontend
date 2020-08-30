// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// AntD
import { Form, Col, Row, Input } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
// Color Picker
import { AlphaPicker, HuePicker } from "react-color";
// Styles
import "./styles.less";

interface IColorsTab {
	onSetColor: () => void;
}

const ColorsTab: FC<IColorsTab> = ({ onSetColor }) => {
	const [state, setState] = useState({
		colorChroma: "#FFFFF",
		colorPicker: "#FFFFF",
		alphaPicker: "60%",
		sensibility: "0.8"
	});

	const { colorChroma, colorPicker, alphaPicker, sensibility } = state;

	const handleSketchPicker = () => {
		// onSetColor(color)
	};

	return (
		<Form className="colors-form">
			<Row gutter={[25, 25]}>
				<Col span={12}>
					<Form.Item className="colors-form__field">
						<h3>¿Qué color de tu input vamos a reemplazar?</h3>
						<h4>Color Seleccionado</h4>
						<Input defaultValue="#4447F" />
						<HuePicker />
					</Form.Item>

					<Form.Item className="colors-form__field">
						<h3>Tambié selecciona la sensibilidad</h3>
						<h4>Sensibilidad</h4>
						<Input defaultValue="#4447F" />

						<AlphaPicker />
					</Form.Item>
				</Col>

				<Col span={12}>
					<Form.Item className="colors-form__field">
						<h3>¿Por qué color lo reemplazamos?</h3>
						<h4>Color Seleccionado</h4>

						<Input defaultValue="#4447F" />

						<HuePicker />
					</Form.Item>
					<Form.Item className="colors-form__field">
						<h3>También seleccioná la opacidad</h3>
						<h4>Opacidad</h4>
						<Input defaultValue="#4447F" />
						<AlphaPicker />
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default ColorsTab;
