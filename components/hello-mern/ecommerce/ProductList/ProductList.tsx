// React
import { FC } from "react";
// Components
import ProductItem from "./ProductItem";
import MainRowLayout from "../MainRowLayout/MainRowLayout";
// Styles
import "./ProductList.less";

interface SaleProductListProps {
	// products: Product[];
	products: any;
}

const ProductList: FC<SaleProductListProps> = ({ products }) => {
	return (
		<MainRowLayout rowClassName="product-list">
			{products.map((product) => {
				return <ProductItem product={product} key={product.id} />;
			})}
		</MainRowLayout>
	);
};

export default ProductList;
