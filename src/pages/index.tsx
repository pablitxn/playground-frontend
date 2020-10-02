// Next
import Head from "next/head";
// Constants
import { GOOGLE_SITE_VERIFICATION } from "utils/constants";
// Layouts
import HomeLayout from "layouts/home";

export default function Home() {
	return (
		<>
			<Head>
				<title>Playground 🐦</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="google-site-verification"
					content={GOOGLE_SITE_VERIFICATION}
				/>
			</Head>

			<HomeLayout />
		</>
	);
}
