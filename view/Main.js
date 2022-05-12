import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { Text, View } from "react-native";
import * as Locations from "expo-location";
import * as Permissions from "expo-permissions";
import Home from "./Home";
import Loading from "./Loading";

export default function Main() {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "f2997bc5f3bd6bddc67d4abc9333802a";
  const [errorMessage, setErrorMessage] = useState(null);
  const [fetchedUp, setFetchedUp] = useState(false);
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMessage("Oops, this will not work");
    } else {
      getLocation();
    }
  }, []);

  useEffect(() => {
    if (location !== null) {
      fetchData(location.coords.latitude, location.coords.longitude);
    }
  }, [location]);

  const getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMessage("Permission to access location was denied");
    }
    let location = await Locations.getCurrentPositionAsync({});
    setLocation(location);
  };

  const fetchData = async (lat, lon) => {
    await fetch(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setFetchedUp(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return fetchedUp ? <Home data={data} /> : <Loading />;
}
