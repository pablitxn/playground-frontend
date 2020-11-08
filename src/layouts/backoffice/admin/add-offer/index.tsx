// React
import { FC } from "react";
// Components
import OfferForm from "components/backoffice/offer-form";
// AntD
import { Typography } from "antd";

interface IAddProduct {
	handleAddProduct: () => void;
}

const { Title } = Typography;

const AddProduct: FC<IAddProduct> = ({ handleAddProduct }) => {
	return (
		<div className="bff-offer">
			<div className="bff-offer__header">
				<Title>Cargar una oferta nueva</Title>
			</div>
			<div>
				<OfferForm handleAddProduct={handleAddProduct} />
			</div>
		</div>
	);
};

export default AddProduct;
