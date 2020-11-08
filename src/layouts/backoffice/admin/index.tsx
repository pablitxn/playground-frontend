// React
import { FC } from "react";
// Components
import CreateOffers from "components/hello-mern/create-offers/create-offers.component";

interface IAdminLayout {
	handleCreateOffer: any;
}

const AdminLayout: FC<IAdminLayout> = ({ handleCreateOffer }) => {
	return (
		<div className="wb-app__layout">
			<CreateOffers handleSubmit={handleCreateOffer} />
		</div>
	);
};

export default AdminLayout;
