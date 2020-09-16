// Types
import { FC } from "react";
// Components
import Slider from "components/360-slider";
import MainLayout from "layouts";

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
