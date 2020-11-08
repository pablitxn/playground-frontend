// React
import React, { FC, useEffect, useState } from "react";
// AntD
import { Menu } from "antd";
// Components
import CreateOffers from "components/hello-mern/create-offers/create-offers.component";
import Product from "./products";
import AddProduct from "./add-product";
import AddOffer from "./add-offer";
import Configs from "./configs";
// Icons
import {
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined
} from "@ant-design/icons";
// Styles
import "./styles.less";

interface IAdminLayout {
	handleCreateOffer: any;
}

const { SubMenu } = Menu;

const AdminLayout: FC<IAdminLayout> = ({ handleCreateOffer }) => {
	/** Definitions */
	const [state, setState] = useState({
		section: "products"
	});
	const { section } = state;
	const isConfigTab =
		section === "cnf-general" || "cnf-profile" || "cnf-password";

	/** Handlers */
	const handleMenu = (event: any) => {
		const { key: newValue } = event;
		setState((prev) => ({ ...prev, section: newValue }));
	};
	useEffect(() => {
		console.log(section);
	}, [section]);

	return (
		<div className="bff-admin">
			<div className="bff-admin__menu">
				<Menu
					defaultSelectedKeys={["products"]}
					mode="horizontal"
					theme="dark"
					onClick={handleMenu}
				>
					<Menu.Item key="products" icon={<PieChartOutlined />}>
						Ver Productos
					</Menu.Item>
					<Menu.Item key="add-product" icon={<DesktopOutlined />}>
						Cargar nuevo producto
					</Menu.Item>
					<Menu.Item key="add-offer" icon={<ContainerOutlined />}>
						Crear nueva oferta
					</Menu.Item>
					<SubMenu icon={<MailOutlined />} title="Configuraciones">
						<Menu.Item key="cnf-general">General</Menu.Item>
						<Menu.Item key="cnf-profile">Perfil</Menu.Item>
						<Menu.Item key="cnf-password">Cambiar contraseña</Menu.Item>
					</SubMenu>
				</Menu>
			</div>
			<div className="bff-admin__content">
				{section === "products" && <Product products={[]} />}
				{section === "add-product" && <AddProduct products={[]} />}
				{section === "add-offer" && <AddOffer products={[]} />}
				{isConfigTab && <Configs tab={section} />}
			</div>
		</div>
	);
};

export default AdminLayout;
