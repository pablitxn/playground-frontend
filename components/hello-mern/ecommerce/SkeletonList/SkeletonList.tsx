// React
import { FC } from "react"
// Components
import SkeletonItem from './SkeletonItem';
import MainRowLayout from '../MainRowLayout/MainRowLayout';
// Styles
import './SkeletonList.less';

interface ISkeletonList {
  itemCount: number;
}

const SkeletonList: FC<ISkeletonList> = ({ itemCount }) => {
  return (
    <MainRowLayout rowClassName="product-categories-skeleton">
      {Array.from(Array(itemCount)).map((_, i) => (
        <SkeletonItem key={i} itemCount={itemCount} />
      ))}
    </MainRowLayout>
  );
};

export default SkeletonList;
