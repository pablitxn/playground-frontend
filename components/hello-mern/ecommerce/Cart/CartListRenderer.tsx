// React
import { FC } from "react";
// Components
import CartList from "./CartList";
import SkeletonList from "../SkeletonList/SkeletonList";

interface ICartListRenderer {
	// cartProducts: Product[];
	cartProducts: any;
	totalItems: number;
}

const CartListRenderer: React.FC<ICartListRenderer> = ({
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
