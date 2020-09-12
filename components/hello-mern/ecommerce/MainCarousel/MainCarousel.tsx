// React
import { FC } from "react"
// AntD
import { Carousel } from 'antd';
// Styles
import './MainCarousel.less';

const MainCarousel: FC = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src="/images/carousel-demo-images/fashion-1031469_1920.jpg" />
      </div>
      <div>
        <img src="/images/carousel-demo-images/vinyl-records-945396_1920.jpg" />
      </div>
      <div>
        <img src="/images/carousel-demo-images/bazaar-1853361_1920.jpg" />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
