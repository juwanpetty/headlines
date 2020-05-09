import { useState, useEffect } from "react";

export function usePosition() {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onChange, onError);
    } else {
      setError("Geolocation is not supported");
      return;
    }
  }, []);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  return { ...position, error };
}
