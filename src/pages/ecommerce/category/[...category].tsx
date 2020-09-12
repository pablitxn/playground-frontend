// React
import { useEffect, useState } from "react";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import MainPageHeader from "components/ecommerce/MainPageHeader/MainPageHeader";
// Router
import { useRouter } from "next/router";

const Category = () => {
	const [isLoading, setLoading] = useState(false);

	const router = useRouter();
	const { category: categoryParam } = router.query;
	const category_id = categoryParam ? categoryParam[0] : null;
	const currentCategoryName = categoryParam ? categoryParam[1] : "...";

	const categoryProducts = {};
	const category = { id: "", description: "" };
	const currentCategoryId = `${category?.id ?? ""}`;
	const curretCategoryDesc = category?.description ?? "...";

	// useEffect(() => {
	// 	if (category_id && category_id !== currentCategoryId) {
	// 		setLoading(true);
	// 		dispatch(
	// 			fetchCategoryProducts(category_id, () => {
	// 				setLoading(false);
	// 			})
	// 		);
	// 		dispatch(fetchCategory(category_id));
	// 	}
	// }, [category_id]);

	return (
		<MainLayout title={`React eCommerce - ${currentCategoryName} category`}>
			<MainPageHeader
				title={`Category: ${currentCategoryName}`}
				subTitle={curretCategoryDesc}
			/>
			<ProductListRenderer
				spin={isLoading}
				products={categoryProducts}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
};

export default Category;
