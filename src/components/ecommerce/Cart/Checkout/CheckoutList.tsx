// React
import { FC, useContext } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import CheckoutItem from "./CheckoutItem";
// Context
import { CartContext } from "contexts/ecommerce";
// Styles
import "./CheckoutList.less";

interface ICheckoutList {
	products: IProduct[];
}

const CheckoutList: FC<ICheckoutList> = ({ products }) => {
	const { totalPrice } = useContext(CartContext);

	return (
		<div className="checkout-list">
			<div className="table-heading">
				<div>Products Ordered</div>
				<div>Amount</div>
				<div>Item Subtotal</div>
			</div>
			{products.map((product, i) => {
				return <CheckoutItem product={product} key={i} />;
			})}
			<div className="overall-total-price">
				<div>
					TOTAL: <span>${totalPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default CheckoutList;
