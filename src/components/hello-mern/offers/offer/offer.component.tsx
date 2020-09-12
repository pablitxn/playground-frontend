// Types
import { FC } from "react";
import { IOffer } from "./offer.types";
// Styles
import "./offer.styles.less";
// AntD
import { Card } from "antd";

// AntD Definitions
const { Meta } = Card;

const Offer: FC<IOffer> = ({ items, titleSection }) => {
	return (
		<div className="offer">
			<h3 className="offer__title">{titleSection}</h3>
			{/* <h3 className="offer__title">{titleSection}</h3> */}
			<div className="offer__cards">
				{items.map((item, i) => {
					const { name, imageUrl, price } = item;
					return (
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt={name} src={imageUrl} key={i} />}
						>
							<Meta
								title={name}
								description={`increible precio -> $${price}`}
							/>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default Offer;
