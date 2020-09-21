// React
import { FC } from "react";
// Layouts
import RoomLayout from "layouts/coffee-chat/room";
// Hooks
import { useCoffeChat } from "hooks/useCoffeeChat";
// Router
import { useRouter } from "next/router";

const Room = () => {
	// const router = useRouter();
	// const { category: categoryParam } = router.query;
	// const category_id = categoryParam ? categoryParam[0] : null;
	// const currentCategoryName = categoryParam ? categoryParam[1] : "...";

	const chatData = useCoffeChat();

	return (
		<>
			<RoomLayout chatData={chatData} users={chatData.users} />
		</>
	);
};

export default Room;
