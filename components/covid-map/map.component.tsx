// @ts-nocheck
// Hooks
import { useState } from "react";
// Google Maps
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// Utils
import { apiKey } from "./utils";

const mapStyles = {
	width: "70%",
	height: "70%"
};

// const scaleControl = 2;
const zoom = 2;
const initialCenter = { lat: 0, lng: 0 };

const MapComponent = (props) => {
	const { markers } = props;
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

	return (
		<Map
			style={mapStyles}
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
			className={props.className}
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
