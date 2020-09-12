// Types
import { FC } from "react"
// Hooks
import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
// Components
import MainLayout from 'components/hello-mern/ecommerce/MainLayout/MainLayout';
import CartListRenderer from 'components/hello-mern/ecommerce/Cart/CartListRenderer';
import OrderSummary from 'components/hello-mern/ecommerce/Cart/OrderSummary';
import { CartContext, SkeletonListContext, Breakpoints } from 'contexts';
import './cart.less';

const Cart = () => {
  const  items = [];
  const totalItems = []
  const cartProducts  = []
  const itemsLength = items.length;

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
