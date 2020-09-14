// React
import { FC } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import ProductItem from "./ProductItem";
import MainRowLayout from "../MainRowLayout/MainRowLayout";
// Styles
import "./ProductList.less";

interface SaleProductListProps {
	products: IProduct[];
}

const ProductList: FC<SaleProductListProps> = ({ products }) => {
	return (
		<MainRowLayout rowClassName="product-list">
			{products.map((product, i) => {
				return <ProductItem product={product} key={i} />;
			})}
		</MainRowLayout>
	);
};

export default ProductList;
