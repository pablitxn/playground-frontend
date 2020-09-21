// React
import { FC } from "react";
// Layouts
import CoffeChatLayout from "layouts/coffee-chat";
// Styles
import "./styles.less";

const CoffeChat: FC = () => {
	const handleSignIn = (data: any) => console.log(data);

	return (
		<>
			<CoffeChatLayout handleSignIn={handleSignIn} />
		</>
	);
};

export default CoffeChat;
