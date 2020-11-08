// Types
import { MutableRefObject } from "react";
import { ChromaColor } from "interfaces/chroma-key";

/** Get base 64 image */
// TODO: tipar ese file
export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

/** Modify Pixels */
type IModifyPixels = (
	color: ChromaColor,
	chromaIntensity: number,
	imageData: any
) => any;
export const modifyPixels: IModifyPixels = (
	color,
	chromaIntensity,
	imageData
) => {
	/** Definitions */
	const dataLength = imageData.data.length / 4;
	// console.log("intensity", chromaIntensity);
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
				if (red > chromaIntensity && red > blue && red > green) {
					imageData.data[offset + 3] = 0;
				}
				break;
			case "green":
				if (green > chromaIntensity && green > red && green > blue) {
					imageData.data[offset + 3] = 0;
				}
				break;
			case "blue":
				if (blue > chromaIntensity && blue > red && blue > green) {
					imageData.data[offset + 3] = 0;
				}
				break;
		}
	}

	return imageData;
};

/** Chroma handlers */
type HandleChroma = (
	canvas: MutableRefObject<HTMLCanvasElement>,
	video: MutableRefObject<HTMLVideoElement>,
	chromaColor: ChromaColor,
	chromaIntensity: number
) => void;

export const handleChroma: HandleChroma = (
	canvas,
	video,
	chromaColor,
	chromaIntensity
) => {
	/** Definitions */
	const newContext = canvas.current.getContext("2d");

	/** Draw video frame in new context*/
	newContext.drawImage(
		video.current,
		0,
		0,
		canvas.current.width,
		canvas.current.height
	);

	/** Get image data */
	const imageData = newContext.getImageData(
		0,
		0,
		canvas.current.width,
		canvas.current.height
	);

	/** Making chroma key */
	const newImage = modifyPixels(chromaColor, chromaIntensity, imageData);
	// Insert new image in canvas context (with typescript problems omited)
	newContext.putImageData(newImage, 0, 0);
	// @ts-ignore
	canvas.current.context = newContext;
};

export async function handleWebcamVideo(
	video: MutableRefObject<HTMLVideoElement>
) {
	try {
		video.current.srcObject = await navigator.mediaDevices.getUserMedia({
			video: true
		});
	} catch (err) {
		console.log(err);
		navigator.mediaDevices.getUserMedia({ video: false });
	}
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
