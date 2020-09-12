// React
import { FC, useContext } from "react";
// Components
import CheckoutItem from "./CheckoutItem";
// Context
import { CartContext } from "contexts";
// Styles
import "./CheckoutList.less";

interface ICheckoutList {
	// products: Product[];
	products: any;
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
			{products.map((product) => {
				return <CheckoutItem product={product} key={product.id} />;
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