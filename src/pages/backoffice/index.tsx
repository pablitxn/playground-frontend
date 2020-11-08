// Types
import { FC, useState } from "react";
// Components
import AdminLayout from "layouts/backoffice/admin";
import SignInLayout from "layouts/backoffice/sign-in";
// Styles
import "./styles.less";

const Backoffice: FC = () => {
	/** Definitions */
	const [state, setState] = useState({
		isLogged: false
	});
	const { isLogged } = state;

	/** Handlers */
	const handleCreateOffer = (formData) => {
		console.log(formData);
	};

	const handleSignIn = () => {
		setState((prevState) => ({ isLogged: !prevState.isLogged }));
	};

	return (
		<div className="backoffice">
			{isLogged ? (
				<AdminLayout handleCreateOffer={handleCreateOffer} />
			) : (
				<SignInLayout handleSignIn={handleSignIn} />
			)}
		</div>
	);
};

export default Backoffice;
