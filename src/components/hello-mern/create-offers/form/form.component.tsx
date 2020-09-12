// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// AntD
import { Form, Input, InputNumber, Button, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not validate email!",
		number: "${label} is not a validate number!"
	},
	number: {
		range: "${label} must be between ${min} and ${max}"
	}
};

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("You can only upload JPG/PNG file!");
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Image must smaller than 2MB!");
	}
	return isJpgOrPng && isLt2M;
}

interface ICreateOfferForm {
	handleSubmit: any;
}

const CreateOfferForm: FC<ICreateOfferForm> = ({ handleSubmit }) => {
	const [state, setState] = useState({
		loading: false,
		imageUrl: ""
	});

	const handleChange = (info) => {
		if (info.file.status === "uploading") {
			setState({
				...state,
				loading: true
			});
			return;
		}
		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (imageUrl) =>
				setState({
					imageUrl,
					loading: false
				})
			);
		}
	};

	const { loading, imageUrl } = state;

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	const onFinish = (values) => {
		handleSubmit(values);
	};

	return (
		<Form
			{...layout}
			name="create-offer"
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name="name"
				label="Nombre del producto"
				rules={[{ required: true }]}
			>
				<Input placeholder="Campera yunga verde" />
			</Form.Item>
			<Form.Item
				name="description"
				label="Descripción"
				rules={[{ required: true }]}
			>
				<Input.TextArea
					autoSize={{ minRows: 8 }}
					placeholder="Esta campera fue confeccionada en los andes jujeños por una comunidad de ..."
				/>
			</Form.Item>
			<Form.Item
				name="price"
				label="Precio"
				rules={[{ type: "number", required: true }]}
			>
				<InputNumber
					formatter={(value) => `$${value}`}
					parser={(value) => value.replace("$", "")}
					placeholder="$400 dolares americanos"
				/>
			</Form.Item>
			<Form.Item
				name="images"
				label="Imagen del producto"
				rules={[{ required: true }]}
			>
				<Upload
					name="image"
					listType="picture-card"
					className="image-uploader"
					showUploadList={false}
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					beforeUpload={beforeUpload}
					onChange={handleChange}
				>
					{imageUrl ? (
						<img src={imageUrl} alt="image" style={{ width: "100%" }} />
					) : (
						uploadButton
					)}
				</Upload>
			</Form.Item>

			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateOfferForm;
