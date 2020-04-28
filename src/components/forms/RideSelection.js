import React from "react";
import { useSelector } from "react-redux";

const RideSelection = () => {
  const rides = useSelector((state) => state.ride.available);
  const stops = useSelector((state) => state.stop.list);

  const formatFromTo = ({ startId, stopId }) => {
    const fromName = stops.find((stop) => stop.id === startId);
    const toName = stops.find((stop) => stop.id === stopId);
    if (!fromName || !toName) {
      return "";
    }

    return `${fromName.name} → ${toName.name}`;
  };

  return (
    <ul>
      {rides.map((ride) => (
        <li key={ride.id}>
          <p>{formatFromTo(ride)}</p>
          <p>{new Date(ride.timeOfDeparture).toUTCString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default RideSelection;
