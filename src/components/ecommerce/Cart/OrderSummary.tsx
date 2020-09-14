// React
import { FC, useContext, useState } from "react";
import { IProduct } from "interfaces/ecommerce";
// Components
import CheckoutModal from "./Checkout/CheckoutModal";
// AntD
import { Typography, Button } from "antd";
// Context
import { CartContext } from "contexts/ecommerce";

const { Title, Text } = Typography;

interface IOrderSummary {
	cartProducts: IProduct[];
	totalItems: number;
}

const OrderSummary: FC<IOrderSummary> = ({ cartProducts, totalItems }) => {
	const { totalPrice } = useContext(CartContext);
	const [modalVisibility, setModalVisibility] = useState(false);

	return (
		<div className="order-summary">
			<Title level={3}>Order Summary</Title>
			<div>
				<Text type="secondary">Total</Text>
				<Text disabled={cartProducts.length === 0}>₱{Number(totalPrice)}</Text>
			</div>
			<Button
				type="primary"
				size="large"
				disabled={cartProducts.length === 0 || totalItems === 0}
				onClick={() => setModalVisibility(true)}
			>
				CHECKOUT
			</Button>
			<CheckoutModal
				visible={modalVisibility}
				hideModal={() => setModalVisibility(false)}
			/>
		</div>
	);
};

export default OrderSummary;
