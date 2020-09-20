// React
import { FC, useEffect, useState } from "react";
// Layouts
import EcommerceLayout from "layouts/ecommerce";
// Services
import services from "services/ecommerce";

const Ecommerce: FC = () => {
	const [state, setState] = useState<any>();

	useEffect(() => {
		const getData = async () => {
			const products = await services.getProducts();
			const categories = await services.getCategories();
			setState({
				products,
				categories
			});
		};

		getData();
	}, []);

	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<div className="ecommerce">
			{state ? (
				<EcommerceLayout
					products={state.products}
					categories={state.categories}
				/>
			) : (
				<span>loading...</span>
			)}
		</div>
	);
};

export default Ecommerce;
