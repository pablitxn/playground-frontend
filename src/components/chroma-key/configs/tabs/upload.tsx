// @ts-nocheck
// React
import { FC, useState } from "react";
// Utils
import { getBase64, initialState } from "utils/chroma-key";
// AntD
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// Styles
import "./styles.less";

const UploadTab: FC = () => {
	const [state, setState] = useState(initialState);

	const handleCancel = () => setState({ ...state, previewVisible: false });

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setState({
			...state,
			previewImage: file.url || file.preview,
			previewVisible: true,
			previewTitle:
				file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
		});
	};

	const handleChange = ({ fileList }) => setState({ ...state, fileList });

	const { previewVisible, previewImage, fileList, previewTitle } = state;

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div className="ant-upload-text">Upload</div>
		</div>
	);

	return (
		<div className="upload-images">
			<Upload
				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
			>
				{fileList.length >= 8 ? null : uploadButton}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="example" style={{ width: "100%" }} src={previewImage} />
			</Modal>
		</div>
	);
};

export default UploadTab;
