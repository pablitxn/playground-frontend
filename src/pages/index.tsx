// Next
import Head from "next/head";
// Constants
import { GOOGLE_SITE_VERIFICATION } from "utils/constants"

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

			<div>
				<h2>hola bienvenide</h2>
			</div>
		</>
	);
}
