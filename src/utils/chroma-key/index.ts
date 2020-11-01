export * from "./chroma";

export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

/** Initial States */
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

export const initialStateChroma = {
	backgroundImage: undefined,
	chromaColor: {
		r: 0,
		g: 0,
		b: 255,
		a: 1
	}
};

export const initialColor = {
	r: 0,
	g: 0,
	b: 255,
	a: 1
};

type IModifyPixels = (color: "red" | "green" | "blue", imageData: any) => any;

export const modifyPixels: IModifyPixels = (color, imageData) => {
	/** Definitions */
	const dataLength = imageData.data.length / 4;

	// TODO: Traducir -> Iteramos los pixeles
	for (let i = 0; i < dataLength; i++) {
		// solo itera los pixeles que tengo, pero cada 4
		// esto es porque cada posicion es un elemento del rgba (chequear)
		const offset = i * 4;
		const red = imageData.data[offset + 0];
		const green = imageData.data[offset + 1];
		const blue = imageData.data[offset + 2];

		switch (color) {
			case "red":
				if (red > 90 && red > blue && red > green) {
					imageData.data[offset + 3] = 0;
				}
				break;
			case "green":
				if (green > 90 && green > red && green > blue) {
					imageData.data[offset + 3] = 0;
				}
				break;
			case "blue":
				if (blue > 90 && blue > red && blue > green) {
					imageData.data[offset + 3] = 0;
				}
				break;
		}
	}

	return imageData;
};

export const pickColor = (rgbColor: ChromaColor) => {
	const { r: red, g: green, b: blue } = rgbColor;
	/** Red */
	if (red > green && red > blue && red > 90) return "red";
	/** Green */
	if (green > red && green > blue && green > 90) return "green";
	/** Blue */
	if (blue > red && blue > green && blue > 90) return "blue";
};
