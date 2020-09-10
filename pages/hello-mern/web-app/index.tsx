// Types
import { FC } from "react";
// Components
import MainLayout from "layouts/main";
import WebAppLayout from "layouts/hello-mern/web-app.layout";

const WebApp: FC = () => {
	const offersMock = [
		{
			name: "hola",
			imageUrl: "asd",
			price: 540
		},
		{
			name: "chau",
			imageUrl: "asd",
			price: 540
		},
		{
			name: "quehace",
			imageUrl: "asd",
			price: 540
		},
		{
			name: "dondetas",
			imageUrl: "asd",
			price: 540
		}
	];

	const offersDataMock = [
		offersMock,
		offersMock,
		offersMock
	]

	return (
		<>
			<MainLayout>
				<WebAppLayout offersData={offersDataMock} />
			</MainLayout>
		</>
	);
};

export default WebApp;
