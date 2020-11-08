// React
import { FC } from "react";
// AntD
import { Typography, Table } from "antd";
// Styles
import "./styles.less";
// Utils
import { columns, data } from "utils/backoffice/mock";

interface IProductsLayout {
	products: any;
}

const { Title } = Typography;

const ProductsLayout: FC<IProductsLayout> = ({ products }) => {
	return (
		<div className="bff-products">
			<div className="bff-products__header">
				<Title>Productos en la tienda</Title>
			</div>
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default ProductsLayout;
