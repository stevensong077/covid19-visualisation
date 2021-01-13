import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";
import { Button } from "antd";

const MapComponent = withScriptjs(
  withGoogleMap((props) => {
    const { dataset } = props;
    const calculateLocation = (suburbArray) => {
      let nameArray = [];
      let locationLat = 0;
      let locationLng = 0;
      for (let i = 0; i < suburbArray.length; i++) {
        nameArray.push(suburbArray[i].name);
        locationLat += suburbArray[i].lat;
        locationLng += suburbArray[i].lng;
      }
      return {
        sub: nameArray,
        lat: locationLat / suburbArray.length,
        lng: locationLng / suburbArray.length,
      };
    };
    return (
      <>
        <Button onClick={() => dataset.map((marker) => console.log(marker))}>
          show
        </Button>
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: -37.8136, lng: 144.9631 }}
        >
          {dataset.map((marker) => (
            <Marker
              position={{
                lat: calculateLocation(marker.suburbs).lat,
                lng: calculateLocation(marker.suburbs).lng,
              }}
              key={marker.post}
              title={calculateLocation(marker.suburbs).name}
            ></Marker>
          ))}
        </GoogleMap>
      </>
    );
  })
);

export default MapComponent;
