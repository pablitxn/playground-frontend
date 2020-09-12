// Types
import { FC } from "react";
import { IProduct } from "interfaces/ecommerce";
// Components
import CartList from "./CartList";
import SkeletonList from "../SkeletonList/SkeletonList";

interface ICartListRenderer {
	cartProducts: IProduct[];
	totalItems: number;
}

const CartListRenderer: FC<ICartListRenderer> = ({
	cartProducts,
	totalItems
}) => {
	return (
		<>
			{cartProducts.length > 0 && totalItems > 0 ? (
				<CartList products={cartProducts} />
			) : (
				<SkeletonList itemCount={totalItems} />
			)}
		</>
	);
};

export default CartListRenderer;
