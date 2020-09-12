// Hooks
import { useEffect, useRef, useState } from "react";
// Utils
import { chromaKey } from "./chroma-key.utils";
// Styles
import "./chroma-key.styles.less";
import ChromaConfigurations from "components/chroma-key/configurations.component";

function App() {
	const refInput = useRef();
	const refCanvas = useRef();
	const refVideo = useRef();

	const [ctx, setCtx] = useState();
	const [elements, setElements] = useState();

	useEffect(() => {
		const context = refCanvas.current.getContext("2d");

		setElements({
			video: refVideo.current,
			canvas: refCanvas.current
		});

		setCtx(context);
	}, [ctx]);

	useEffect(() => {
		if (elements) {
			const { canvas, video } = elements;

			window.navigator.mediaDevices
				.getUserMedia({
					video: true
				})
				.then((stream) => {
					video.srcObject = stream;
				});

			video.addEventListener("loadeddata", () => {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				setInterval(() => chromaKey(ctx, canvas, video, setCtx), 40);
			});
		}
	}, [elements, ctx]);

	return (
		<div className="chroma-key">
			<div className="chroma-key__options">
				<h2> Customizá chroma! </h2>
				<ChromaConfigurations />
			</div>
			<div className="chroma-key__content">
				<video ref={refVideo} autoPlay></video>
				<canvas ref={refCanvas} className="canvas"></canvas>
			</div>
		</div>
	);
}

export default App;
