// Types
import { FC } from "react";
// AntD
import { Card } from "antd";
// Styles
import "./styles.less";

interface IGalleryTab {
	images: any
}

const GalleryTab: FC<IGalleryTab> = ({ images = [{},{},{},{},{},{},]}) => {
	const gridStyle = {
		width: "16.665%",
		height: "50%"
	};

	// const handleImage = (event) => {
	// 	const { key: image } = event.target
	// 	console.log("le diste clic a la img ", image)
	// }

	return (
		<Card>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
		</Card>
	);
};

export default GalleryTab;
