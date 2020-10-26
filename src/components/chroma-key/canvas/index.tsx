// React
import { FC, useState, useRef, useEffect } from "react";
// Styles
import "./styles.less";
// Utils
import { handleChroma, handleWebcamVideo } from "./utils";

interface ICanvas {
	className?: string;
	handleCanvas: () => void;
}

const Canvas: FC<ICanvas> = ({ className, handleCanvas }) => {
	/** Definitions */
	const [permission, setPermission] = useState(false);

	/** Refs DOM elements */
	const canvas = useRef(null);
	const video = useRef(null);

	/** Catching webcam data */
	useEffect(() => {
		if (video.current) {
			handleWebcamVideo(video);
		}
	}, [video]);

	/**
	 * useEffect(() => {
	 * 	// actualizar permisos para mostrar seccion canvas
	 * // handler / listener
	 * setPermisos(true)
	 * }, [permisos])
	 */

	// useEffect(() => {
	// 	if (video.current && video.current.srcObject) {
	// 		setPermission(true);
	// 	} else {
	// 		setPermission(false);
	// 	}
	// }, [video]);

	/** Handlers */
	const handleVideo = () => setInterval(() => handleChroma(canvas, video), 20);

	return (
		<div className="canvas">
			{true ? (
				<>
					<canvas ref={canvas}></canvas>
					<video onLoadedData={handleVideo} ref={video} autoPlay></video>
				</>
			) : (
				<span>esperando permisos...</span>
			)}
		</div>
	);
};

export default Canvas;
