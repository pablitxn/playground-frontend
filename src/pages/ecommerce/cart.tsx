// Types
import { FC } from "react";
// Hooks
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import CartListRenderer from "components/ecommerce/Cart/CartListRenderer";
import OrderSummary from "components/ecommerce/Cart/OrderSummary";
import {
	CartContext,
	SkeletonListContext,
	Breakpoints
} from "contexts/ecommerce";
import "./cart.less";
import { IProduct } from "interfaces/ecommerce";

const Cart = () => {
	const totalItems = 4;
	const cartProducts: IProduct[] = [
		{
			_id: "5f5ad91ba3c401fac8b16904",
			name: "Guitarra catamarqueña",
			description: "Guitarra acustica riojana",
			slug: "guitar-catamarquenian",
			images: [
				{
					_id: "223",
					src:
						"https://cdn.pixabay.com/photo/2017/05/01/18/18/guitar-2276181_960_720.jpg",
					alt: "Guitarra"
				}
			],
			price: "420",
			regular_price: "450",
			sale_price: "400",
			on_sale: true,
			related_ids: [2, 3]
		}
	];

	const [totalPrice, setTotalPrice] = useState(0);

	// useEffect(() => {
	//   if (itemsLength > 0) {
	//     const cartItemIds = getCartIds(items);
	//     dispatch(fetchProductsByIds(cartItemIds));
	//   }
	// }, [itemsLength]);

	// useEffect(() => {
	//   setTotalPrice(calculateTotalPrice(items));
	// });

	return (
		<CartContext.Provider
			value={{
				totalPrice
			}}
		>
			<SkeletonListContext.Provider
				value={{ xl: 14, lg: 24, md: 24, sm: 24, xs: 24 }}
			>
				<MainLayout title={`React eCommerce - Cart`}>
					<Row className="cart-wrapper boxed-width">
						<Col xl={14} lg={24} md={24} sm={24} xs={24}>
							<CartListRenderer
								cartProducts={cartProducts}
								totalItems={totalItems}
							/>
						</Col>
						<Col xl={10} lg={24} md={24} sm={24} xs={24}>
							<OrderSummary
								cartProducts={cartProducts}
								totalItems={totalItems}
							/>
						</Col>
					</Row>
				</MainLayout>
			</SkeletonListContext.Provider>
		</CartContext.Provider>
	);
};

export default Cart;
