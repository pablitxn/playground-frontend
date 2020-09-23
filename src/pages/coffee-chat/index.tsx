// React
import { FC } from "react";
// Layouts
import CoffeChatLayout from "layouts/coffee-chat";
// Router
import { useRouter } from "next/router";

const CoffeChat: FC = () => {
	const router = useRouter();

	const handleSignIn = (data: any) => {
		console.log("sign in ->", data);
		router.push("/coffee-chat/room/general");
	};

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
