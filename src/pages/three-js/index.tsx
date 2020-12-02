import Link from "next/link";

const ThreeJS = () => {
	return (
		<div className="main">
			<div>
				<h1>¡Hola!</h1>
				<p>acá le vamos a meter magia a three.js</p>
				<small>proximamente más magia</small>
			</div>
			<Link href="/three-js/birds">
				<a>Birds Example</a>
			</Link>
			<Link href="/three-js/boxes">
				<a>Boxes Example</a>
			</Link>
		</div>
	);
};

export default ThreeJS;
