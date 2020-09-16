// Types
// import { NextComponentType } from "next";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import MainCarousel from "components/ecommerce/MainCarousel/MainCarousel";
import CategoryListRenderer from "components/ecommerce/CategoryList/CategoryListRenderer";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import SimpleHeading from "components/ecommerce/SimpleHeading";
// Services
import ecommerceServices from "services/ecommerce";

const Home = ({ products, categories }) => {
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

Home.getInitialProps = async () => {
	const products = await ecommerceServices.getProducts();
	const categories = await ecommerceServices.getCategories();

	return { products, categories };
};

export default Home;
