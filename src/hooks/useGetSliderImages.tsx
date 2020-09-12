import { useEffect, useState } from "react";

const getImages = (setImages) => {
	let images = [];
	for (let i = 1; i <= 36; i++) {
		const numberToRequest = i.toString().padStart(2, "00");
		const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${numberToRequest}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`;
		// const image = new Image();
		const image = { src: "" };
		image.src = url;
		images = [...images, image];
	}
	setImages(images);
};

export const useGetSliderImages = () => {
	const [images, setImages] = useState();

	useEffect(() => {
		getImages(setImages);
	}, []);

	return images;
};
