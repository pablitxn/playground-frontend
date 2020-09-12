// Types
import { FC } from "react";
import { IBackofficeLayout } from "./types";
// Components
import CreateOffers from "components/hello-mern/create-offers/create-offers.component";

const BackofficeLayout: FC<IBackofficeLayout> = ({ handleCreateOffer }) => {
	return (
		<div className="wb-app__layout">
			<CreateOffers handleSubmit={handleCreateOffer} />
			{/**others modules */}
		</div>
	);
};

export default BackofficeLayout;
