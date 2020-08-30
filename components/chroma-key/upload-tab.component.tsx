// @ts-nocheck
// Types
import { FC } from "react";
// Hooks
import { useState } from "react";
// AntD
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

const UploadTab: FC = () => {
	const [state, setState] = useState({
		previewVisible: false,
		previewImage: "",
		previewTitle: "",
		fileList: [
			{
				uid: "-1",
				name: "image.png",
				status: "done",
				url:
					"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
			},
			{
				uid: "-2",
				name: "image.png",
				status: "done",
				url:
					"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
			},
			{
				uid: "-3",
				name: "image.png",
				status: "done",
				url:
					"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
			},
			{
				uid: "-4",
				name: "image.png",
				status: "done",
				url:
					"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
			},
			{
				uid: "-5",
				name: "image.png",
				status: "error"
			}
		]
	});

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
		<div className="clearfix">
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
