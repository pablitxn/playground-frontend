// React
import { FC } from "react";
// Components
import CartItem from "./CartItem";

interface ICartList {
	// products: Product[];
	products: any;
}

const CartList: FC<ICartList> = ({ products }) => {
	return (
		<div className="cart-list">
			{products.map((product) => {
				return <CartItem product={product} key={product.id} />;
			})}
		</div>
	);
};

export default CartList;
