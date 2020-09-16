// Types
import { FC } from "react";
import { IProduct } from "interfaces/ecommerce";
// Components
import ProductInfo from "../ProductInfo";
// Router
import Link from "next/link";
// Utils
import { getCartItemCount } from "utils/cart_helper";

interface ICheckoutItem {
	product: IProduct;
}

const CheckoutItem: FC<ICheckoutItem> = ({ product }) => {
	const items = [{ id: "", price: "200", count: 200 }];
	const { _id, price } = product;

	const product_id = `${_id}`;
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
