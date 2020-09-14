// React
import { FC, useContext} from "react"
// AntD
import { Skeleton, Col } from 'antd';
import { SkeletonListContext } from 'contexts/ecommerce';

interface ISkeletonItem {
  itemCount: number;
}

const SkeletonItem: FC<ISkeletonItem> = ({ itemCount }) => {
  const { xl, md, sm, lg, xs } = useContext(SkeletonListContext);

  return (
    <Col
      xl={xl}
      md={md}
      sm={sm}
      lg={lg}
      xs={xs}
      style={{ textAlign: 'center' }}
    >
      <Skeleton
        loading={true}
        active
        avatar={{ shape: 'square' }}
        paragraph={false}
        title={false}
      />
    </Col>
  );
};

export default SkeletonItem;
