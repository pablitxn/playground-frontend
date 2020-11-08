// React
import { FC } from "react";
// Components
import ProductForm from "components/backoffice/product-form";
// AntD
import { Typography } from "antd";

interface IAddProduct {
	handleAddProduct: () => void;
}

const { Title } = Typography;

const AddProduct: FC<IAddProduct> = ({ handleAddProduct }) => {
	return (
		<div className="bff-products">
			<div className="bff-products__header">
				<Title>Cargar un nuevo producto</Title>
			</div>
			<div>
				<ProductForm handleAddProduct={handleAddProduct} />
			</div>
		</div>
	);
};

export default AddProduct;
