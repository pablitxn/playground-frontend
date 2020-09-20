// React
import { FC } from "react";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import MainCarousel from "components/ecommerce/MainCarousel/MainCarousel";
import CategoryListRenderer from "components/ecommerce/CategoryList/CategoryListRenderer";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import SimpleHeading from "components/ecommerce/SimpleHeading";

interface IEcommerceLayout {
	products: any;
	categories: any;
}

const EcommerceLayout: FC<IEcommerceLayout> = ({ products, categories }) => {
	return (
		<MainLayout title="React eCommerce">
			<MainCarousel />
			<SimpleHeading title="Product Categories" />
			<CategoryListRenderer
				categories={categories}
				breakpoints={{
					xl: 8,
					lg: 8,
					md: 8,
					sm: 24,
					xs: 24
				}}
			/>
			<SimpleHeading title="On sale Products" level={2} />
			<ProductListRenderer
				skeleton
				skeletonCount={4}
				products={products}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
};

export default EcommerceLayout;
