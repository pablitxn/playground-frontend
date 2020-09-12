// Types
import { FC } from "react";
import { ICreateOffers } from "./create-offers.types";
// Components
import CreateOfferForm from "./form/form.component";

const CreateOffers: FC<ICreateOffers> = ({ handleSubmit }) => {
	return (
		<div>
			<h2>Hola, queonda bro</h2>
			<span>rellena el siguiente formulario asi podemos cargar la offer </span>
			<CreateOfferForm handleSubmit={handleSubmit} />
		</div>
	);
};

export default CreateOffers;
