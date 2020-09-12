// React
import { FC } from "react";
// Components
import ProductList from "./ProductList";
import Spinner from "../Spinner/Spinner";
import SkeletonList from "../SkeletonList/SkeletonList";
// Context
import { SkeletonListContext, Breakpoints } from "contexts";

interface IProductListRenderer {
	products: any;
	// products: Product[];
	skeletonCount?: number;
	skeleton?: boolean;
	spin?: boolean;
	breakpoints: any;
	// breakpoints: Breakpoints;
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
