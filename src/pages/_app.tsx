// Types
import { FC } from "react";
import { AppProps } from "next/app";
// Components
import MainLayout from "layouts";
// Styles
import "./app.less";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
};

export default App;
