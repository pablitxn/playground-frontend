// Hooks
import { useEffect, useRef, useState } from "react";
import { useGetSliderImages } from "hooks/useGetSliderImages";

function Slider() {
	const [value, setValue] = useState(0);
	const refInput = useRef();
	const refCanvas = useRef();

	// const [ctx, setCtx] = useState();
	// const [elements, setElements] = useState();

	// useEffect(() => {
	// 	const context = refCanvas.current.getContext("2d");

	// 	setCtx(context);
	// 	setElements({
	// 		slider: refInput.current,
	// 		canvas: refCanvas.current
	// 	});
	// }, [ctx]);

	const images = useGetSliderImages();

	// useEffect(() => {
	// 	if (elements) {
	// 		const { slider, canvas } = elements;
	// 		const images = [];

	// 		slider.addEventListener("input", handleInputSlider);
	// 		window.addEventListener("load", pageLoaded);

	// 		function loadImage(index) {
	// 			ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
	// 		}

	// 		function handleInputSlider() {
	// 			console.log("está renderizandose la imagen n°", this.value);
	// 			loadImage(this.value);
	// 		}

	// 		function pageLoaded() {
	// 			for (let i = 1; i <= 36; i++) {
	// 				const numberToRequest = i.toString().padStart(2, "00");
	// 				const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${numberToRequest}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`;
	// 				const image = new Image();
	// 				image.src = url;
	// 				image.addEventListener("load", () => {
	// 					images[i] = image;
	// 					if (i === 1) {
	// 						loadImage(i);
	// 					}
	// 				});
	// 			}
	// 		}
	// 	}
	// }, [elements, ctx]);

	const handleChange = (event) => {
		const { value } = event.target;
		setValue(value);
	};

	useEffect(() => {
		console.log("into slider", images);
	}, [images]);

	return (
		<p>
			<canvas ref={refCanvas} className="canvas" width="768" height="512"></canvas>
			<input
				ref={refInput}
				className="slider"
				type="range"
				min="1"
				max="36"
				value={value}
				step="1"
				onChange={handleChange}
				name="slider"
			/>
		</p>
	);
}

export default Slider;
