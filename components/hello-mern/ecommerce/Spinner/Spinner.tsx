// React
import { FC } from "react"
// AntD
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// Styles
import './Spinner.less';

const Spinner: FC = () => {
  return (
    <div className="spinner">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
    </div>
  );
};

export default Spinner;
