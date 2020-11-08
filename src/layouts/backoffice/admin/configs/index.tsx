// React
import { FC } from "react";
// Components
import ProductForm from "components/backoffice/product-form";
// AntD
import { Typography } from "antd";

interface IConfigs {
	tab: string;
}

const { Title } = Typography;

const Configs: FC<IConfigs> = ({ tab }) => {
	return (
		<div className="bff-products">
			<div className="bff-products__header">
				{tab === "cnf-general" && <Title>Configuracion general</Title>}
				{tab === "cnf-profile" && <Title>Configurar perfil</Title>}
				{tab === "cnf-password" && <Title>Cambiar contraseña</Title>}
			</div>
			<div>
				{/* {tab === "cnf-general" && <Title>Configuracion general</Title>} */}
				{/* {tab === "cnf-profile" && <Title>Configurar perfil</Title>} */}
				{/* {tab === "cnf-password" && <Title>Cambiar contraseña</Title>} */}
			</div>
		</div>
	);
};

export default Configs;
