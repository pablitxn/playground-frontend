// Types
import { FC } from "react";
// AntD
import { Card } from "antd";
// Styles
import "./styles.less";

interface IGalleryTab {}

const GalleryTab: FC<IGalleryTab> = ({}) => {
	const gridStyle = {
		width: "25%"
	};

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
		</Card>
	);
};

export default GalleryTab;
