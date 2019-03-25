import GoogleMap from "google-map-react";
import config from "../../config";

const coordinates = { lat: 50.939636, lng: 5.339189 };

const renderMarkers = ({ map, maps }) => {
  let marker = new maps.Marker({
    position: coordinates,
    map,
    title: "FixTrack"
  });
};

export default () => (
  <div style={{ height: 350, width: "100%" }}>
    <GoogleMap
      bootstrapURLKeys={{ key: config.googleMapsApiKey }}
      defaultCenter={coordinates}
      defaultZoom={14}
      onGoogleApiLoaded={renderMarkers}
      yesIWantToUseGoogleMapApiInternals
    />
  </div>
);
