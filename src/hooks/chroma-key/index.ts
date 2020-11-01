import { useState, useEffect } from "react";
import { handleChroma, handleWebcamVideo } from "utils/chroma-key";

export const useColorControler = (canvas, video, chromaColor) => {
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
			}, 2000)
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
		/** Test */
		if (intervalA) {
			clearInterval(intervalA);
			setState({
				intervalA: undefined,
				intervalB: setInterval(() => {
					handleChroma(canvas, video, chromaColor);
				}, 2000)
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
