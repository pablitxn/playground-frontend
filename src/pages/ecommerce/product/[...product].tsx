// React
import { FC, useState, useEffect } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import SingleProductRenderer from "components/ecommerce/SingleProduct/SingleProductRenderer";
// Router
import { useRouter } from "next/router";

const Product = () => {
	const [isLoading, setLoading] = useState(false);
	const [product, setProduct] = useState<IProduct>();

	const router = useRouter();
	const { product: productParam } = router.query;
	const productId = [productParam] ?? null;

	const API_PRODUCT = `http://localhost:4200/api/ecommerce/get-product/${productId}`;

	useEffect(() => {
		const getProduct = async () => {
			try {
				const productData = await fetch(API_PRODUCT);
				const productFormated = await productData.json();
				setProduct(productFormated.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProduct();
	}, []);

	return (
		<MainLayout title={`React eCommerce - ${"sd"}`}>
			<SingleProductRenderer
				product={product}
				loading={isLoading}
				breakpoints={[
					{ xl: 10, lg: 10, md: 10, sm: 24, xs: 0 },
					{ xl: 14, lg: 14, md: 14, sm: 24, xs: 0 }
				]}
			/>
		</MainLayout>
	);
};

export default Product;
