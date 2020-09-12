// Types
import { FC } from "react";
// Components
import MainLayout from "layouts/main";
import BackofficeLayout from "layouts/hello-mern/backoffice.layout";

const Backoffice: FC = () => {
	const handleCreateOffer = (formData) => {
		console.log(formData)
	};

	return (
		<>
			<MainLayout>
				<BackofficeLayout handleCreateOffer={handleCreateOffer} />
			</MainLayout>
		</>
	);
};

export default Backoffice;
