import React from "react";
import Current from "./Component/Currenrt/Current";
import { useEffect, useState } from "react";

const TestHomePage = () => {
  const [userLat, setUserLat] = useState();
  const [userLot, setUserLot] = useState();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      setUserLat(lat);
      setUserLot(lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    console.log("userLat:", userLat, "userLot:", userLot);
  }, [userLat, userLot]);

  return (
    <div>
      {userLat && userLot && <Current userLat={userLat} userLot={userLot} />}
    </div>
  );
};

export default TestHomePage;
