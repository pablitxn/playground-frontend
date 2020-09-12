// Types
import { FC } from "react";
import { IWebAppLayout } from "./types";
// Components
import Offers from "components/hello-mern/offers/offers.component";

const WebAppLayout: FC<IWebAppLayout> = ({ offersData }) => {
	return (
		<div className="wb-app__layout">
			<Offers offersData={offersData} />
			{/**others modules */}
		</div>
	);
};

export default WebAppLayout;
