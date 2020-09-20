export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

export const initialState = {
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
};
