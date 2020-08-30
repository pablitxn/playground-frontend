// Types
import { FC } from "react";
// Components
import Slider from "components/360-slider/slider.component";
import MainLayout from "../../layouts/main";

const SliderPage: FC = () => {
	return (
		<>
			<MainLayout>
				<Slider />
			</MainLayout>
		</>
	);
};

export default SliderPage;
