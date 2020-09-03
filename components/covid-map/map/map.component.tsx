// @ts-nocheck
// Hooks
import { useState, useEffect } from "react";
// Google Maps
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// Utils
import { apiKey } from "../utils";

const zoom = 2;
const initialCenter = { lat: 0, lng: 0 };

const MapComponent = (props) => {
	const { markers, className } = props;
	const [popUp, setPopUp] = useState({
		state: false,
		marker: {}
	});

	const handlePopUp = (marker) => {
		setPopUp({
			state: !popUp.state,
			marker: marker
		});
	};

	useEffect(() => {
		console.log(markers);
	}, [markers]);

	return (
		<Map
			draggable={props.draggable}
			fullscreenControl={props.fullscreenControl}
			scrollwheel={props.scrollwheel}
			zoomControl={props.zoomControl}
			scaleControl={props.scaleControl}
			streetViewControl={props.streetViewControl}
			mapTypeControl={props.mapTypeControl}
			google={props.google}
			zoom={zoom}
			initialCenter={initialCenter}
			className={className}
		>
			{markers.map((marker, i) => {
				if (marker?.location) {
					const { location } = marker;
					return (
						<Marker
							key={i}
							position={location}
							onClick={() => handlePopUp(marker)}
						/>
					);
				}
			})}
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: apiKey
})(MapComponent);
