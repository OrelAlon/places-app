import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Tel Aviv",
    description: "One of the most famous city in the world!",
    imageUrl:
      "https://ynet-images1.yit.co.il/picserver5/crop_images/2020/09/01/BJqUFHjmD/BJqUFHjmD_0_32_1001_563_0_x-large.jpg",
    address: "Tel aviv, israel, israel 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const { userId } = useParams();
  const loadPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};

export default UserPlaces;
