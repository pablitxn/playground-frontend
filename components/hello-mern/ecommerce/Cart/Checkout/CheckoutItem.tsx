// React
import FC from "react";
// Components
import ProductInfo from "../ProductInfo";
// Router
import Link from "next/link";
// Utils
import { getCartItemCount } from "utils/cart_helper";

interface CheckoutItemProps {
	// product: Product;
	product: any;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
	const items = [];
	const { id, price } = product;

	const product_id = `${id}`;
	const totalItemCount = getCartItemCount(items, product_id);
	const subtotal = parseFloat(price) * totalItemCount;

	return (
		<div className="cart-item">
			<ProductInfo product={product} />
			<div className="quantity">{totalItemCount}</div>
			<div className="subtotal">${subtotal}</div>
		</div>
	);
};

export default CheckoutItem;
