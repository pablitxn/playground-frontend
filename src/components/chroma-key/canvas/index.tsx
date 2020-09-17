// React
import { FC, useState, useRef, useEffect } from "react";
// Utils
import { handleChroma } from "./utils";
// Styles

interface IState {
	ctx: any;
	canvasEl: any;
	videoEl: any;
}

const Canvas: FC = () => {
	const [state, setState] = useState<IState>();
	const canvasRef = useRef(null);
	const videoRef = useRef(null);

	const handleVideo = () => {
		if (state) {
			const { canvasEl, videoEl } = state;
			canvasEl.width = videoEl.videoWidth;
			canvasEl.height = videoEl.videoHeight;
			setInterval(() => handleChroma(state, setState), 40);
		}
	};

	useEffect(() => {
		if (canvasRef && videoRef) {
			const context = canvasRef.current.getContext("2d");
			const videoEl = videoRef.current;
			const canvasEl = canvasRef.current;

			setState({
				...state,
				ctx: context,
				videoEl: videoEl,
				canvasEl: canvasEl
			});
		}
	}, [canvasRef, videoRef]);

	useEffect(() => {
		if (state) {
			const { videoEl } = state;
			const handleWebcamVideo = async () => {
				try {
					videoEl.srcObject = await navigator.mediaDevices.getUserMedia({
						video: true
					});
				} catch (err) {
					console.log(err);
					// return await navigator.mediaDevices.getUserMedia({ video: false });
				}
			};
			handleWebcamVideo();
		}
	});

	return (
		<div className="chroma-key__content">
			<>
				<video onLoadedData={handleVideo} ref={videoRef} autoPlay></video>
				<canvas ref={canvasRef} className="canvas"></canvas>
			</>
		</div>
	);
};

export default Canvas;
