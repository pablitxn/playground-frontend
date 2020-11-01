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
	chromaColor: ChromaColor
) => HandleVideo;

export const useChroma: IUseChroma = (canvas, video, chromaColor) => {
	/** Definitions */
	const [state, setState] = useState({
		intervalA: undefined,
		intervalB: undefined
	});
	const { intervalA, intervalB } = state;

	const handleVideo = () => {
		setState((prevState) => ({
			...prevState,
			intervalA: setInterval(() => {
				handleChroma(canvas, video, chromaColor);
			}, 30)
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
		console.log("color picked", chromaColor);
		if (intervalA) {
			clearInterval(intervalA);
			setState({
				intervalA: undefined,
				intervalB: setInterval(() => {
					handleChroma(canvas, video, chromaColor);
				}, 30)
			});
		}

		if (intervalB) {
			clearInterval(intervalB);
			setState({
				intervalA: setInterval(() => {
					handleChroma(canvas, video, chromaColor);
				}, 2000),
				intervalB: undefined
			});
		}
	}, [chromaColor]);

	return handleVideo;
};
