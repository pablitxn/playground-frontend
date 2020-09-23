// React
import { FC, useEffect, useState } from "react";
// Layouts
import RoomLayout from "layouts/coffee-chat/room";
// Hooks
import { useCoffeChat } from "hooks/useCoffeeChat";
// Router
import { useRouter } from "next/router";

const Room: FC = () => {
	const [room, setRoom] = useState("");
	const router = useRouter();

	const { handleChat, users } = useCoffeChat();

	useEffect(() => {
		if (router.query.room) {
			const room = router.query.room[0];
			setRoom(room);
		}
	}, [router]);

	return (
		<>
			<RoomLayout handleChat={handleChat} room={room} users={users} />
		</>
	);
};

export default Room;
