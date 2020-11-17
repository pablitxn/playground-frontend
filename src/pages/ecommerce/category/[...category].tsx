// React
import { useEffect, useState } from "react";
// Types
import { ICategory, IProduct } from "interfaces/ecommerce";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import MainPageHeader from "components/ecommerce/MainPageHeader/MainPageHeader";
// Router
import { useRouter } from "next/router";
// Utils
import { getProductsAPI } from "./utils";

const Category = () => {
	const [isLoading, setLoading] = useState(true);
	const [products, setProducts] = useState<IProduct[]>([
		{
			_id: "",
			name: "",
			slug: "",
			updatedAt: "",
			description: "",
			price: "",
			regular_price: "",
			sale_price: "",
			on_sale: false,
			related_ids: [1, 2],
			images: [{ src: "", _id: "", alt: "" }]
		}
	]);
	const [category, setCategory] = useState<ICategory>({
		_id: "",
		name: "",
		slug: "",
		description: "",
		parent: 20,
		count: 200,
		image: { src: "" },
		products: products
	});

	const router = useRouter();
	const { category: categoryParam } = router.query;
	const category_id = categoryParam ? categoryParam[0] : "";

	const API_PROD_CATEGORIES = `http://localhost:4200/api/ecommerce/category/${category_id}`;

	useEffect(() => {
		const getProductsByCategory = async () => {
			try {
				const categoryByQuery = await fetch(API_PROD_CATEGORIES);
				const categoryData = await categoryByQuery.json();
				categoryData && setCategory(categoryData.data);

				const productsAPI = getProductsAPI(categoryData.data.slug);
				const productsByCategory = await fetch(productsAPI);
				const productsFormated = await productsByCategory.json();
				setProducts(productsFormated.data);

				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		getProductsByCategory();
	}, [categoryParam]);

	return (
		<MainLayout title={`Playground eCommerce - ${category?.name ?? ""}`}>
			<MainPageHeader title={category?.name ?? ""} />
			<ProductListRenderer
				spin={isLoading}
				products={category?.products ?? products}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
};

export default Category;
