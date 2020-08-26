// @ts-nocheck
import { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const BarDetail = (props) => {
	// console.log(props);
	const [bar, setBar] = useState({
		latitud: "",
		longitud: ""
	});

	return (
		<Map
			style={{ width: "100%", height: "150px" }}
			draggable={false}
			fullscreenControl={false}
			scrollwheel={false}
			zoomControl={false}
			scaleControl={false}
			streetViewControl={false}
			mapTypeControl={false}
			google={props.google}
			zoom={14}
			initialCenter={{ lat: bar.latitud, lng: bar.longitud }}
		>
			<Marker position={{ lat: bar.latitud, lng: bar.longitud }} />
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyDp9w89NeF8noYa6q5Xbn-jMUjCiW7L2nU"
})(BarDetail);
