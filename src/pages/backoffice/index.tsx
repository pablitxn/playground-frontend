// Types
import { FC } from "react";
// Components
import BackofficeLayout from "layouts/hello-mern/backoffice.layout";

const Backoffice: FC = () => {
	const handleCreateOffer = (formData) => {
		console.log(formData)
	};

	return (
		<>
				<BackofficeLayout handleCreateOffer={handleCreateOffer} />
		</>
	);
};

export default Backoffice;