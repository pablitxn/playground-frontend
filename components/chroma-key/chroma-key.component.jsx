// Hooks
import { useEffect, useRef, useState } from "react";
// Styles
import "./chroma-key.styles.less";

function chromaKey(ctx, canvas, video, setCtx) {
	const $ctx = ctx;

	$ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	const imageData = $ctx.getImageData(0, 0, canvas.width, canvas.height);
	const dataLength = imageData.data.length / 4;

	for (let i = 0; i < dataLength; i++) {
		// solo itera los pixeles que tengo, pero cada 4 (?)
		// esto es para
		const offset = i * 4;
		const red = imageData.data[offset + 0];
		const green = imageData.data[offset + 1];
		const blue = imageData.data[offset + 2];

		if (blue > 90 && blue > red && blue > green) {
			imageData.data[offset + 3] = 0;
		}
	}
	$ctx.putImageData(imageData, 0, 0);

	setCtx($ctx);
}

function App() {
	const refInput = useRef();
	const refCanvas = useRef();
	const refVideo = useRef();

	const [ctx, setCtx] = useState();
	const [elements, setElements] = useState();

	useEffect(() => {
		const currentCanvas = refCanvas.current;
		const currentVideo = refVideo.current;
		const contexto = currentCanvas.getContext("2d");

		setElements({
			video: currentVideo,
			canvas: currentCanvas
		});

		setCtx(contexto);
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
		<p>
			<input type="text" ref={refInput} defaultValue="Focus me" />
			<video ref={refVideo} autoPlay></video>
			<canvas ref={refCanvas} className="canvas"></canvas>
		</p>
	);
}

export default App;
