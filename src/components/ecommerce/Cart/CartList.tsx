// Types
import { FC } from "react";
import { IProduct } from "interfaces/ecommerce";
// Components
import CartItem from "./CartItem";

interface ICartList {
	products: IProduct[];
}

const CartList: FC<ICartList> = ({ products }) => {
	return (
		<div className="cart-list">
			{products.map((product, i) => {
				return <CartItem product={product} key={i} />;
			})}
		</div>
	);
};

export default CartList;
