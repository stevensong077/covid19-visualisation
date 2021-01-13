import React, { useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  withScriptjs,
  InfoWindow,
} from "react-google-maps";
import { Button } from "antd";
import { compose, withStateHandlers } from "recompose";

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { dataset } = props;
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [openId, setOpenedId] = useState("");

  const calculateLocation = (marker) => {
    let nameArray = [];
    let locationLat = 0;
    let locationLng = 0;
    if (marker.post === "9998") {
      return {
        sub: " Overseas",
        lat: -37.8247282,
        lng: 144.9496289,
      };
    } else if (marker.post === "9999") {
      return {
        sub: " Interstate",
        lat: -37.8118235,
        lng: 144.9614356,
      };
    } else {
      for (let i = 0; i < marker.suburbs.length; i++) {
        nameArray.push(" " + marker.suburbs[i].name);
        locationLat += marker.suburbs[i].lat;
        locationLng += marker.suburbs[i].lng;
      }
      return {
        sub: nameArray,
        lat: locationLat / marker.suburbs.length,
        lng: locationLng / marker.suburbs.length,
      };
    }
  };

  return (
    <>
      <Button onClick={() => dataset.map((marker) => console.log(marker))}>
        show
      </Button>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: -37.8136, lng: 144.9631 }}
        gestureHandling={"greedy"}
      >
        {dataset.map((marker) => (
          <Marker
            position={{
              lat: calculateLocation(marker).lat,
              lng: calculateLocation(marker).lng,
            }}
            key={marker.post}
            onClick={() => setOpenedId(marker.post)}
          >
            {openId === marker.post && (
              <InfoWindow onCloseClick={() => setOpenedId("")}>
                <>
                  {marker.post +
                    " : " +
                    calculateLocation(marker).sub +
                    " : " +
                    marker.cases}
                </>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </>
  );
});

export default MapWithAMakredInfoWindow;
