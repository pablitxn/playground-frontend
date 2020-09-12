// Types
import { FC, useEffect } from "react";
import { IOffers } from "./offers.types";
// Components
import Offer from "./offer/offer.component";
// AntD
import { Carousel } from "antd";

const Offers: FC<IOffers> = ({ offersData }) => {
	useEffect(() => console.log(offersData), [offersData]);

	return (
		<div className="offers">
			<Carousel dots autoplay dotPosition="left">
				{offersData.map((offers, i) => (
					<div className={i}>
						<Offer
							items={offers}
							titleSection="40% OFF llevando 2 o más prendas"
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Offers;
