// React
import { FC, useState, useEffect } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import SingleProductRenderer from "components/ecommerce/SingleProduct/SingleProductRenderer";
// Router
import { useRouter } from "next/router";
// Services
import services from "services/ecommerce";

const Product: FC = () => {
	const [isLoading, setLoading] = useState(true);
	const [product, setProduct] = useState<IProduct>({
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
	});

	const router = useRouter();
	const { product: productParam } = router.query;
	const productId = [productParam] ?? null;

	useEffect(() => {
		const getProduct = async () => {
			const productData = await services.getProductById(productId);
			setProduct(productData);
			setLoading((prev) => !prev);
		};

		getProduct();
	}, []);

	return (
		<MainLayout title={`Playground eCommerce - ${product?.name ?? ""}`}>
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
