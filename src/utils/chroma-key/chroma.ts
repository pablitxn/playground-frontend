// Types
import { MutableRefObject } from "react";
import { ChromaColor } from "interfaces/chroma-key";
// Utils
import { modifyPixels, pickColor } from "utils/chroma-key";

type HandleChroma = (
	canvas: MutableRefObject<HTMLCanvasElement>,
	video: MutableRefObject<HTMLVideoElement>,
	chromaColor: ChromaColor
) => void;

export const handleChroma: HandleChroma = (canvas, video, chromaColor) => {
	/** Definitions */
	const newContext = canvas.current.getContext("2d");

	/** Handle color */
	const color = pickColor(chromaColor);

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
	const newImage = modifyPixels(color, imageData);
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
