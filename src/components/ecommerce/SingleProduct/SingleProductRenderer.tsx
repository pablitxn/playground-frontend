// Types
import { FC } from "react";
import { IProduct } from "interfaces/ecommerce";
// Components
import SingleProduct from "./SingleProduct";
import SingleProductSkeleton from "./SingleProductSkeleton/SingleProductSkeleton";
// Context
import { SingleProductContext, Breakpoints } from "contexts/ecommerce";

interface ISingleProductRenderer {
	product: IProduct;
	loading: boolean;
	breakpoints: Breakpoints[];
}

const SingleProductRenderer: FC<ISingleProductRenderer> = ({
	product,
	loading,
	breakpoints
}) => {
	return (
		<SingleProductContext.Provider value={breakpoints}>
			{!product || loading ? (
				<SingleProductSkeleton />
			) : (
				<SingleProduct product={product} />
			)}
		</SingleProductContext.Provider>
	);
};

export default SingleProductRenderer;
