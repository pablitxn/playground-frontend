// Types
import { NextComponentType } from "next";
import { IProductCategory, IProduct } from "interfaces/ecommerce";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import MainCarousel from "components/ecommerce/MainCarousel/MainCarousel";
import CategoryListRenderer from "components/ecommerce/CategoryList/CategoryListRenderer";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import SimpleHeading from "components/ecommerce/SimpleHeading";
// Hooks
import { useMemo, useState } from "react";

const mockdata = {
	products: [
		{
			id: 123123,
			name: "bass",
			description: "lorem peronista",
			date_created: "string",
			price: "23123",
			regular_price: "string",
			sale_price: "string",
			on_sale: false,
			related_ids: [1, 2, 3],
			images: [
				{
					id: 213,
					src: "string",
					alt: "string"
				}
			],
			slug: "asd"
		}
	],
	categories: [
		{
			id: 213,
			name: "category",
			slug: "string",
			description: "string",
			parent: 5468,
			count: 5468,
			image: {
				id: 5468,
				src: "sda"
			}
		}
	]
};

function Home({ categories, products }) {
	return (
		<MainLayout title="React eCommerce">
			<MainCarousel />
			<SimpleHeading title="Product Categories" />
			<CategoryListRenderer
				categories={categories.data}
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
				products={products.data}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
}

Home.getInitialProps = () => {
	const API_CATEGORIES = "http://localhost:4200/api/ecommerce/categories";
	const API_PRODUCTS = "http://localhost:4200/api/ecommerce/products";
	const API_OFFERS = "http://localhost:4200/api/ecommerce/offers";

	const fetchData = async () => {
		try {
			// Fetch
			const productsData = await fetch(API_PRODUCTS);
			const offersData = await fetch(API_OFFERS);
			const categoriesData = await fetch(API_CATEGORIES);
			// Format
			const products = await productsData.json();
			const offers = await offersData.json();
			const categories = await categoriesData.json();
			return {
				products,
				offers,
				categories
			};
		} catch (err) {
			console.log(err);
		}
	};

	return fetchData();
};

export default Home;
