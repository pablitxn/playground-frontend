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
        <img src="https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/03/20/Recortada/img_oribalta_20200320-021047_imagenes_lv_otras_fuentes_yamaha2-kJnF--656x409@LaVanguardia-Web.jpg" />
      </div>
      <div>
        <img src="https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/03/20/Recortada/img_oribalta_20200320-021047_imagenes_lv_otras_fuentes_yamaha2-kJnF--656x409@LaVanguardia-Web.jpg" />
      </div>
      <div>
        <img src="https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/03/20/Recortada/img_oribalta_20200320-021047_imagenes_lv_otras_fuentes_yamaha2-kJnF--656x409@LaVanguardia-Web.jpg" />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
