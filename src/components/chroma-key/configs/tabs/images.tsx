// Types
import { FC } from "react";
// AntD
import { Card } from "antd";
// Styles
import "./styles.less";

interface IImagesTab {}

const ImagesTab: FC<IImagesTab> = ({}) => {
	const gridStyle = {
		width: "16.665%",
		height: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
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
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
			<Card.Grid style={gridStyle}>IMAGES 64558 x 3.1416</Card.Grid>
		</Card>
	);
};

export default ImagesTab;