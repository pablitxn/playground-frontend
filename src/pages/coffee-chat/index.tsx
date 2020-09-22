// React
import { FC } from "react";
// Layouts
import CoffeChatLayout from "layouts/coffee-chat";
// Styles
import "./styles.less";

const CoffeChat: FC = () => {
	const handleSignIn = (data: any) => console.log("sign in ->", data);

	return (
		<>
			<CoffeChatLayout handleSignIn={handleSignIn} />
		</>
	);
};

export default CoffeChat;

/**
 * TODO:
 *
 * tanto el chroma como el chat, van a tener una view style compartida.
 * hay que repensar ese asunto, mientras el coffe va directo full screen
 *
 *
 */
