// export function chromaKey(ctx, canvas, video, setCtx) {
// 	const $ctx = ctx;

// 	$ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
// 	const imageData = $ctx.getImageData(0, 0, canvas.width, canvas.height);
// 	const dataLength = imageData.data.length / 4;

// 	for (let i = 0; i < dataLength; i++) {
// 		// solo itera los pixeles que tengo, pero cada 4 (?)
// 		// esto es para
// 		const offset = i * 4;
// 		const red = imageData.data[offset + 0];
// 		const green = imageData.data[offset + 1];
// 		const blue = imageData.data[offset + 2];

// 		if (blue > 90 && blue > red && blue > green) {
// 			imageData.data[offset + 3] = 0;
// 		}
// 	}
// 	$ctx.putImageData(imageData, 0, 0);

// 	setCtx($ctx);
// }

export const handleChroma = (state, setState) => {
	// Definitions
	const { ctx, video, canvas } = state;
	const paper = ctx; // pegar linea de abajo
	paper.drawImage(video, 0, 0, canvas.width, canvas.height);
	const imageData = paper.getImageData(0, 0, canvas.width, canvas.height);
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

	paper.putImageData(imageData, 0, 0);

	setState({ ...state, ctx: paper });
};
