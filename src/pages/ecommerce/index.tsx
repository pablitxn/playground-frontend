// React
import { FC, useEffect, useState } from "react";
// Layouts
import EcommerceLayout from "layouts/ecommerce";
// Services
import services from "services/ecommerce";
import Spinner from "components/ecommerce/Spinner/Spinner";

const Ecommerce: FC = () => {
	const [state, setState] = useState<any>();

	useEffect(() => {
		const getData = async () => {
			const products = await services.getOffers();
			const categories = await services.getCategories();
			setState({
				products,
				categories
			});
		};

		getData();
	}, []);

	return (
		<div className="ecommerce">
			{state ? (
				<EcommerceLayout
					products={state.products}
					categories={state.categories}
				/>
			) : (
				<div style={{ marginTop: "5rem" }}>
					<Spinner />
				</div>
			)}
		</div>
	);
};

export default Ecommerce;
