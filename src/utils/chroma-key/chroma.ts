// Types
import { MutableRefObject } from "react";
import { ChromaColor } from "interfaces/chroma-key";

type HandleChroma = (
	canvas: MutableRefObject<HTMLCanvasElement>,
	video: MutableRefObject<HTMLVideoElement>,
	color: ChromaColor
) => void;

export const handleChroma: HandleChroma = (canvas, video, color) => {
	/** Definitions */
	const newContext = canvas.current.getContext("2d");

	/** Handle color */
	const newColor = pickColor(color);
	console.log("into handle chroma", newColor);

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
	const dataLength = imageData.data.length / 4;

	/** Making chroma key */
	// TODO: Traducir -> Iteramos los pixeles
	for (let i = 0; i < dataLength; i++) {
		// solo itera los pixeles que tengo, pero cada 4
		// esto es porque cada posicion es un elemento del rgba (chequear)
		const offset = i * 4;
		const red = imageData.data[offset + 0];
		const green = imageData.data[offset + 1];
		const blue = imageData.data[offset + 2];

		if (blue > 90 && blue > red && blue > green) {
			imageData.data[offset + 3] = 0;
		}
		// if (color > 90 && color > red && color > green) {
		// 	imageData.data[offset + 3] = 0;
		// }
	}
	// pegamos el video modificado al papel clonado de ctx
	newContext.putImageData(imageData, 0, 0);
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

function pickColor(rgbColor: ChromaColor) {
	const { r: red, g: green, b: blue } = rgbColor;
	/** Red */
	if (red > green && red > blue && red > 90) return { r: red };
	/** Green */
	if (green > red && green > blue && green > 90) return { g: green };
	/** Blue */
	if (blue > red && blue > green && blue > 90) return { b: blue };
}
