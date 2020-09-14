// Types
import { FC } from "react";
import { IProductCategory, IProduct } from "interfaces/ecommerce";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import MainCarousel from "components/ecommerce/MainCarousel/MainCarousel";
import CategoryListRenderer from "components/ecommerce/CategoryList/CategoryListRenderer";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import SimpleHeading from "components/ecommerce/SimpleHeading";

const Home: FC = () => {
	const saleProducts: IProduct[] = [{
		id: 123123,
		name: "bass",
		description: "lorem peronista",
		date_created: "string",
		price: "23123",
		regular_price: "string",
		sale_price: "string",
		on_sale: false,
		related_ids: [1, 2, 3],
		images: [{
			id: 213,
			src: "string",
			alt: "string"
		}],
		slug: "asd"
	}];
	const mainCategories: IProductCategory[] = [{
		id: 213,
		name: "category",
		slug: "string",
		description: "string",
		parent: 5468,
		count: 5468,
		image: {
			id: 5468,
			src: "sda",
		},
	}];

	// useEffect(() => {
	// 	dispatch(fetchMainProductCategories());
	// 	dispatch(fetchSaleProducts());
	// }, []);

	return (
		<MainLayout title="React eCommerce">
			<MainCarousel />
			{console.log("asd")}
			<SimpleHeading title="Product Categories" />
			<CategoryListRenderer
				categories={mainCategories}
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
				products={saleProducts}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
};

export default Home;
