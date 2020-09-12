// React
import { FC, useState, useEffect } from 'react';
// Components
import MainLayout from 'components/hello-mern/ecommerce/MainLayout/MainLayout';
import SingleProductRenderer from 'components/hello-mern/ecommerce/SingleProduct/SingleProductRenderer';
// Router
import { useRouter } from 'next/router';

const Product = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { product: productParam } = router.query;
  const productId = productParam ? productParam[0] : null;

  const currentProduct  = {id: "", name:""}
  const currentProductId = `${currentProduct?.id ?? ''}`;
  const currentProductName = currentProduct?.name ?? '...';


  // useEffect(() => {
  //   if (productId && productId !== currentProductId) {
  //     setLoading(true);
  //     dispatch(
  //       fetchProductById(productId, () => {
  //         setLoading(false);
  //       })
  //     );
  //   }
  // }, [productId]);

  return (
    <MainLayout title={`React eCommerce - ${currentProductName}`}>
      <SingleProductRenderer
        product={currentProduct}
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
