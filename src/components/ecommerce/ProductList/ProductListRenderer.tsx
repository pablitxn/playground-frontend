// React
import { FC } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import ProductList from "./ProductList";
import Spinner from "../Spinner/Spinner";
import SkeletonList from "../SkeletonList/SkeletonList";
// Context
import { SkeletonListContext, Breakpoints } from "contexts/ecommerce";

interface IProductListRenderer {
	products: IProduct[];
	skeletonCount?: number;
	skeleton?: boolean;
	spin?: boolean;
	breakpoints: Breakpoints;
}

const ProductListRenderer: FC<IProductListRenderer> = ({
	products,
	skeleton,
	skeletonCount = 0,
	spin,
	breakpoints
}) => {
	return (
		<SkeletonListContext.Provider value={breakpoints}>
			{skeleton && products.length === 0 && (
				<SkeletonList itemCount={skeletonCount} />
			)}
			{products.length > 0 && !spin && <ProductList products={products} />}
			{spin && <Spinner />}
		</SkeletonListContext.Provider>
	);
};

export default ProductListRenderer;
