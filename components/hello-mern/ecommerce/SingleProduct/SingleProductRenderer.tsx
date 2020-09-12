// React
import {FC} from 'react';
// import { Product } from '../../actions';
import SingleProduct from './SingleProduct';
import SingleProductSkeleton from './SingleProductSkeleton/SingleProductSkeleton';
// Context
import { SingleProductContext, Breakpoints } from 'contexts';

interface ISingleProductRenderer {
  // TODO: Tipar
  product?: any;
  loading: boolean;
  breakpoints: Breakpoints[];
}

const SingleProductRenderer: FC<ISingleProductRenderer> = ({
  product,
  loading,
  breakpoints
}) => {
  return (
    <SingleProductContext.Provider value={breakpoints}>
      {!product || loading ? (
        <SingleProductSkeleton />
      ) : (
        <SingleProduct product={product} />
      )}
    </SingleProductContext.Provider>
  );
};

export default SingleProductRenderer;
