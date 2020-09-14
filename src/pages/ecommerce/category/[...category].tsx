// React
import { useEffect, useState } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import MainPageHeader from "components/ecommerce/MainPageHeader/MainPageHeader";
// Router
import { useRouter } from "next/router";

const Category = () => {
	const [isLoading, setLoading] = useState(false);
	const [products, setProducts] = useState<IProduct[]>([
		{
			_id: "test",
			name: "wip",
			slug: "",
			updatedAt: "",
			description: "trabajando en esto",
			price: "450",
			regular_price: "420",
			sale_price: "520",
			on_sale: true,
			related_ids: [1, 2],
			images: [{ src: "", _id: "", alt: "" }]
		}
	]);

	const router = useRouter();
	const { category: categoryParam } = router.query;
	const category_id = categoryParam ? categoryParam[0] : null;
	const currentCategoryName = categoryParam ? categoryParam[1] : "...";

	const API_PROD_CATEGORIES = `http://localhost:4200/api/ecommerce/category/${category_id}`;

	useEffect(() => {
		const getProductsByCategory = async () => {
			try {
				const productsByCategory = await fetch(API_PROD_CATEGORIES);
				const productsFormated = await productsByCategory.json();
				// setProducts(productsFormated.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProductsByCategory();
	}, []);

	return (
		<MainLayout title={`React eCommerce - ${currentCategoryName} category`}>
			<MainPageHeader
				title={`Category: ${currentCategoryName}`}
				subTitle={"fix me"}
			/>
			<ProductListRenderer
				spin={isLoading}
				products={products}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
};

export default Category;
