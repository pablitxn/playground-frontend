// React
import { useState, useEffect, MutableRefObject } from "react";
// Types
import { ChromaColor } from "interfaces/chroma-key";
// Utils
import { handleChroma, handleWebcamVideo } from "utils/chroma-key";

type HandleVideo = () => void;
type IUseChroma = (
	canvas: MutableRefObject<HTMLCanvasElement>,
	video: MutableRefObject<HTMLVideoElement>,
	chromaColor: ChromaColor,
	chromaIntensity: number
) => HandleVideo;

export const useChroma: IUseChroma = (
	canvas,
	video,
	chromaColor,
	chromaIntensity
) => {
	/** Definitions */
	const [state, setState] = useState({
		intervalA: undefined,
		intervalB: undefined
	});
	const { intervalA, intervalB } = state;

	const handleVideo = () => {
		// TODO: revistar esto. es normal que haya 3 handleChroma ?
		setState((prevState) => ({
			...prevState,
			intervalA: setInterval(() => {
				handleChroma(canvas, video, chromaColor, chromaIntensity);
			}, 25)
		}));
	};

	/** Catching webcam data */
	useEffect(() => {
		if (video.current) {
			handleWebcamVideo(video);
		}
	}, [video]);

	/** Change color in chroma */
	useEffect(() => {
		// console.log("color picked", chromaColor);
		if (intervalA) {
			clearInterval(intervalA);
			setState({
				intervalA: undefined,
				intervalB: setInterval(() => {
					handleChroma(canvas, video, chromaColor, chromaIntensity);
				}, 30)
			});
		}

		if (intervalB) {
			clearInterval(intervalB);
			setState({
				intervalA: setInterval(() => {
					handleChroma(canvas, video, chromaColor, chromaIntensity);
				}, 30),
				intervalB: undefined
			});
		}
	}, [chromaColor, chromaIntensity]);

	return handleVideo;
};
