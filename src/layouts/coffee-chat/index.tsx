// React
import { FC } from "react";
// Components
import Join from "components/coffee-chat/join";

interface ICoffeeChatLayout {
	handleSignIn: any;
}

const CoffeeChatLayout: FC<ICoffeeChatLayout> = ({ handleSignIn }) => {
	return (
		<>
			<Join handleSignIn={handleSignIn} />
		</>
	);
};

export default CoffeeChatLayout;
