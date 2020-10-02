// React
import { FC, useState } from "react";
// AntD
import { Divider, Tabs } from "antd";
// Styles
import "./styles.less";

const { TabPane } = Tabs;

const Home: FC = () => {
	const [currentTab, setCurrentTab] = useState("covid-map");
	const handleTab = (tab: string) => setCurrentTab(tab);

	return (
		<div className="home">
			<h1 className="title">Playground</h1>
			<Divider />
			<section className="hero-text">
				<p>
					Hola, bienvenidx. Playground es un proyecto cuyo fin es ser un canvas
					donde poder experimentar con herramientas, ideas, tecnologías y coso.
					El proyecto contempla una aplicación frontend (esta), un backend
					(link) e infraestructura en la nube (aws)
				</p>

				<p>
					La aplicación frontend está dividida en secciones, donde cada sección
					contempla una aplicación distinta
				</p>
			</section>
			<section className="about-project">
				<h2>Herramientas y tecnologías en el proyecto</h2>
				<Divider />
				<div className="about-project__content">
					<article>
						<h3>Frontend</h3>
						<Divider />
						<ul>
							<li>Lenguaje: Typescript</li>
							<li>Framework: Next.js (version)</li>
							<li>Preprocesador CSS: Less</li>
							<li>Librería de componentes: Ant Design</li>
						</ul>
						<h4>Otras librerias</h4>
						<ul>
							<li>Google Maps React</li>
							<li>Socket.io</li>
						</ul>
					</article>

					<article>
						<h3>Backend</h3>
						<Divider />
						<ul>
							<li>Lenguaje: Typescript</li>
							<li>Framework: Express (version)</li>
							<li>Database: Mongo DB</li>
						</ul>
						<h4>Otras librerias</h4>
						<ul>
							<li>Socket.io</li>
						</ul>
					</article>

					<article>
						<h3>Infraestructura</h3>
						<Divider />
						<ul>
							<li>Amazon web sevices</li>
							<li>Docker</li>
							<li>CI / CD</li>
						</ul>
					</article>
				</div>
			</section>
			<section className="about-pages">
				<Tabs
					defaultActiveKey="covid"
					onChange={handleTab}
					activeKey={currentTab}
				>
					<TabPane tab="Covid map" key="covid-map">
						<Divider />
						<article>
							<h3>Covid-19 Map</h3>
							<p>
								Mediante la API de google maps, y los datos de
								<a href="https://github.com/Laeyoung/COVID-19-API">
									&nbsp;este repositorio&nbsp;
								</a>
								los graficamos y los exponemos en distintas secciones inspiradas
								en el layout de la
								<a href="https://coronavirus.jhu.edu/map.html">
									&nbsp;web de la Universidad John Hopkins&nbsp;
								</a>
							</p>
						</article>
					</TabPane>
					<TabPane tab="Croma customizable" key="croma">
						<Divider />
						<article>
							<h3>Croma customizable</h3>
							<p>
								A través de la interfaz
								<a href="https://developer.mozilla.org/es/docs/Web/API/MediaDevices">
									&nbsp;Media Devices&nbsp;
								</a>
								utilizamos la cámara y reemplazamos un color para lograr un{" "}
								<em>chroma key</em>. Para el fondo se puede elegir una imagen de
								la galería o cargar una desde el dispositivo.
							</p>
						</article>
					</TabPane>
					<TabPane tab="Ecommerce" key="ecommerce">
						<Divider />
						<article>
							<h3>Ecommerce</h3>
							<p>Ecommerce simple, con categorias, ofertas, carrito.</p>
						</article>
					</TabPane>
					<TabPane tab="Backoffice" key="backoffice">
						<Divider />
						<article>
							<h3>Backoffice</h3>
							<p>
								Para poder administrar el ecommerce, precisamos del backoffice
							</p>
						</article>
					</TabPane>
					<TabPane tab="Coffee Chat" key="coffee-chat">
						<Divider style={{ marginTop: 0 }} />
						<article>
							<h3>Coffee Chat</h3>
							<p>Chat en tiempo real.</p>
						</article>
					</TabPane>
				</Tabs>
			</section>
		</div>
	);
};

export default Home;
