// React
import { FC, useState, useEffect } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import ProductInfo from "./ProductInfo";
// AntD
import { InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { getCartItemCount } from "utils/ecommerce";

interface ICartItem {
	product: IProduct;
}

const CartItem: FC<ICartItem> = ({ product }) => {
	const [isDeleting, setDeleting] = useState(false);
	const [itemCount, setItemCount] = useState(0);

	const { _id, price } = product;
	const product_id = `${_id}`;

	const items = [];

	const removeThisItem = () => {
		setDeleting(true);
		// dispatch(removeFromCart(product_id));
	};

	const handleUpdateCartItem = (count = 1) => {
		if (itemCount > count) {
			// dispatch(updateCartItemCount(product_id, price, -1));
		} else {
			// dispatch(updateCartItemCount(product_id, price, 1));
		}
	};

	// useEffect(() => {
	//   const totalItemCount = getCartItemCount(items, product_id);
	//   setItemCount(totalItemCount);
	// });

	return (
		<div className={`cart-item ${isDeleting ? `deleting` : ""}`}>
			<ProductInfo product={product} />
			<div className="quantity-control">
				<InputNumber
					min={1}
					max={9}
					value={itemCount}
					onChange={(count) => handleUpdateCartItem(count as number)}
				/>
			</div>
			<div className="delete">
				<DeleteOutlined onClick={removeThisItem} />
			</div>
		</div>
	);
};

export default CartItem;
